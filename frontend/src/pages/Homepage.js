import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from 'axios'; // Import de la bibliothèque Axios

const Homepage = () => {
    const [tables, setTables] = useState([]); // État pour stocker les données récupérées

    useEffect(() => {
        // Effectue une requête GET vers l'endpoint "/tables" de votre serveur Express
        axios.get('http://localhost:3000/tables')
            .then(response => {
                setTables(response.data); // Met à jour l'état avec les données récupérées
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });
    }, []); // Le tableau vide en tant que deuxième argument assure que cette fonction ne s'exécutera qu'une seule fois après le montage initial du composant

    return(
        <Layout>
            <h1>Homepage</h1>
            <div>
                {/* Afficher les données récupérées */}
                {/* Par exemple, si les données sont un tableau d'objets, vous pouvez les mapper pour les afficher */}
                {tables.map(table => (
                    <div key={table._id}>
                        <h2>{table.Nom}</h2>
                        <img src={table.Image} alt={table.Nom} />
                        <p>Prix: {table.Prix}</p>
                        <p>Matériau: {table.Matériau}</p>
                        <p>Référence: {table.Référence}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Homepage;
