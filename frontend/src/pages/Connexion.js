import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./Connexion.css";
import axios from 'axios'; 

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', {
        email,
        password
      });

     
      localStorage.setItem('token', response.data.token);

      
      window.location.href = "/"; 

    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <Layout>
      <div className="connexion-container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit} className="connexion-form">
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur:</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </Layout>
  );
};

export default Connexion;