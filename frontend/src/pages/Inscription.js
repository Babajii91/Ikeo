// Inscription.js

import React, { useState } from 'react';
import axios from 'axios';

function Inscription() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date_naissance: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/users', formData); // Modifier l'URL pour correspondre à la route appropriée
            alert('Inscription réussie !');
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            alert('Une erreur est survenue lors de l\'inscription.');
        }
    };

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom:
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Prénom:
                    <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Date de naissance:
                    <input type="date" name="date_naissance" value={formData.date_naissance} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Inscription;
