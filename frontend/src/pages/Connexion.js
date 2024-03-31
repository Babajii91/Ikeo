import React from "react";
import Layout from "../components/Layout/Layout";
import "./Connexion.css"; // Importez votre fichier CSS

const Connexion = () => {
    return(
        <Layout>
            <div className="connexion-container">
                <h1>Connexion</h1>
                <form className="connexion-form">
                    <div className="form-group">
                        <label htmlFor="username">Nom d'utilisateur:</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe:</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </Layout>
    );
};

export default Connexion;
