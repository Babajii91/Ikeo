const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/Ikeo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connexion à la base de données réussie');
})
.catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); 
});


const tableSchema = new mongoose.Schema({
    nom: String,
    image: String,
    prix: Number,
    materiau: String,
    reference: String
}, { collection: 'Tables' });


const Table = mongoose.model('Table', tableSchema);


const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    date_naissance: Date,
    email: String,
    password: String
  }, { collection: 'User' });



const User = mongoose.model('User', userSchema);


app.get('/tables', async (req, res) => {
    try {

        const tables = await Table.find();
        res.json(tables); 
    } catch (err) {
        console.error('Erreur lors de la récupération des tables :', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/users', async (req, res) => {
    try {

        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error('Erreur lors de la récupération des utilisateurs :', err);
        res.status(500).json({ error: err.message });
    }});


app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: 'Inscription réussie !' });
    } catch (error) {
      res.status(400).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
    }
  });

  
const port = 3000;


app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
