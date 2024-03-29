import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Authentification from './pages/Authentification';
import PanierAchat from './pages/PanierAchat';
import ProfilUtilisateur from './pages/ProfilUtilisateur';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Connexion" element={<Connexion />} />
      <Route path="/Inscription" element={<Inscription />} />
      <Route path="/Authentification" element={<Authentification />} />
      <Route path="/Panier" element={<PanierAchat />} />
      <Route path="/Profil" element={<ProfilUtilisateur />} />
    </Routes>
  );
}

export default App;
