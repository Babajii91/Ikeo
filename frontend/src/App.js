import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import de BrowserRouter pour envelopper l'application dans un Router
import Homepage from './pages/Homepage';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Authentification from './pages/Authentification';
import PanierAchat from './pages/PanierAchat';
import ProfilUtilisateur from './pages/ProfilUtilisateur';

function App() {
  return (
    <Router> {/* Envelopper l'application dans un Router */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Panier" element={<PanierAchat />} />
        <Route path="/Profil" element={<ProfilUtilisateur />} />
      </Routes>
    </Router>
  );
}

export default App;
