import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div className="bg-dark text-light p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Restez Connecté</h4>
                        <ul className="list-unstyled footer-links">
                        <li><a href="#"><img src="/images/facebook.png" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="/images/twitter.png" alt="Twitter" /></a></li>
                        <li><a href="#"><img src="/images/instagram.png" alt="Instagram" /></a></li>

                            {/* Ajoutez d'autres icônes de médias sociaux et leurs liens */}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4>Liens Utiles</h4>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">Termes et Conditions</a></li>
                            <li><a href="#">Politique de Confidentialité</a></li>
                            <li><a href="#">Contact</a></li>
                            {/* Ajoutez d'autres liens utiles selon vos besoins */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <p>All rights reserved &copy; Ikeo</p>
            </div>
        </div>
    );
};

export default Footer;
