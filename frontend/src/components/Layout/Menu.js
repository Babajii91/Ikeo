// MenuNavigation.js

import React from 'react';
import { Link } from 'react-router-dom';

function MenuNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Connexion</Link>
                </li>
                <li>
                    <Link to="/about">Inscription</Link>
                </li>
                <li>
                    <Link to="/contact">Accueil</Link>
                </li>
                <li>
                    <Link to="../pages/PanierAchat">Panier</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MenuNavigation;
