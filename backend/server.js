// Import des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// Création de l'application Express
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/Ikeo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connexion à la base de données réussie');
})
.catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); // Arrêter le processus en cas d'erreur de connexion
});

// Schéma de données MongoDB pour la collection "Tables"
const tableSchema = new mongoose.Schema({
    nom: String,
    image: String,
    prix: Number,
    materiau: String,
    reference: String
}, { collection: 'Tables' });

// Modèle MongoDB basé sur le schéma
const Table = mongoose.model('Table', tableSchema);

// Schéma de données MongoDB pour la collection "User"
const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    date_naissance: Date,
    email: String,
    password: String
  }, { collection: 'User' });


// Modèle MongoDB basé sur le schéma
const User = mongoose.model('User', userSchema);

// Route pour afficher les données depuis la collection "Tables" de la base de données
app.get('/tables', async (req, res) => {
    try {
        // Récupérer toutes les tables depuis la collection "Tables" de la base de données
        const tables = await Table.find();
        res.json(tables); // Renvoyer les données au format JSON
    } catch (err) {
        console.error('Erreur lors de la récupération des tables :', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/users', async (req, res) => {
    try {
        // Récupérer tous les utilisateurs depuis la collection "User" de la base de données
        const users = await User.find();
        res.json(users); // Renvoyer les données au format JSON
    } catch (err) {
        console.error('Erreur lors de la récupération des utilisateurs :', err);
        res.status(500).json({ error: err.message });
    }});

// Route pour créer un nouvel utilisateur
app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: 'Inscription réussie !' });
    } catch (error) {
      res.status(400).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
    }
  });

// Port d'écoute du serveur
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
