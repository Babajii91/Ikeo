import React from "react";
import Layout from "../components/Layout/Layout";
import "./PanierAchat.css"; // Importez votre fichier CSS

const PanierAchat = () => {
    return(
        <Layout>
            <div className="panier-container">
                <h1>Panier d'Achat</h1>
                <div className="produits">
                    <div className="produit">
                        <img src="produit1.jpg" alt="Produit 1" />
                        <div className="info-produit">
                            <h2>Nom du Produit 1</h2>
                            <p>Description du produit 1</p>
                            <p>Prix: $20.00</p>
                        </div>
                    </div>
                    <div className="produit">
                        <img src="produit2.jpg" alt="Produit 2" />
                        <div className="info-produit">
                            <h2>Nom du Produit 2</h2>
                            <p>Description du produit 2</p>
                            <p>Prix: $30.00</p>
                        </div>
                    </div>
                    {/* Ajoutez plus de produits ici */}
                </div>
                <div className="total">
                    <p>Total: $50.00</p>
                    <button>Passer la Commande</button>
                </div>
            </div>
        </Layout>
    );
};

export default PanierAchat;