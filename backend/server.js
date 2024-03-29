// Import des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Création de l'application Express
const app = express();

app.use(cors());

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

// Schéma de données MongoDB pour la collection "User"
const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    date_naissance: Date,
    email: String
}, { collection: 'User' });

// Modèle MongoDB basé sur le schéma
const User = mongoose.model('User', userSchema);

// Route pour afficher les données depuis la collection "User" de la base de données
app.get('/users', async (req, res) => {
    try {
        // Récupérer tous les utilisateurs depuis la collection "User" de la base de données
        const users = await User.find();
        res.json(users); // Renvoyer les données au format JSON
    } catch (err) {
        console.error('Erreur lors de la récupération des utilisateurs :', err);
        res.status(500).json({ error: err.message });
    }
});

// Port d'écoute du serveur
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
