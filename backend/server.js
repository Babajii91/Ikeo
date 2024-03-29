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

// Schéma de données MongoDB
const tableSchema = new mongoose.Schema({
    Nom: String,
    Image: String,
    Prix: Number,
    Matériau: String,
    Référence: String
}, { collection: 'Tables' }); // Spécification de la collection

// Modèle MongoDB basé sur le schéma
const Table = mongoose.model('Table', tableSchema);

// Route pour afficher les données depuis la collection "tables" de la base de données
app.get('/tables', async (req, res) => {
    try {
        // Récupérer toutes les tables depuis la collection "tables" de la base de données
        const tables = await Table.find();
        res.json(tables); // Renvoyer les données au format JSON
    } catch (err) {
        console.error('Erreur lors de la récupération des tables :', err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// Port d'écoute du serveur
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});