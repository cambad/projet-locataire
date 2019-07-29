import React from 'react';

import './profil.scss';

const Profil = () => (
  <main className="profil">
    <h1 className="profil-title">Bienvenue sur votre profil * username *</h1>
    <img className="profil-picture" src="#" alt="" />
    <ul>
      <li>Nom</li>
      <li>Prénom</li>
      <li>Adresse e-mail</li>
    </ul>
  </main>
);


export default Profil;
