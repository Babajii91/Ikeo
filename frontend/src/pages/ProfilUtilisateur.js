import React from "react";
import Layout from "../components/Layout/Layout";
import "./ProfilUtilisateur.css"; // Importez votre fichier CSS

const ProfilUtilisateur = () => {
    return(
        <Layout>
            <div className="profil-container">
                <h1>Profil Utilisateur</h1>
                <form className="profil-form">
                    <div className="form-group">
                        <label htmlFor="username">Nom d'utilisateur:</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthdate">Date de Naissance:</label>
                        <input type="date" id="birthdate" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Adresse:</label>
                        <input type="text" id="address" />
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </Layout>
    );
};

export default ProfilUtilisateur;
