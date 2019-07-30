import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import './profil.scss';

const Profil = () => (
  <main className="profil">
    <div className="profil-card">
      <p className="profil-card-edit">Edite profile</p>
      <FaUserAlt className="profil-card-picture" />
      <ul className="profil-card-info">
        <li className="profil-card-info-item">Nom</li>
        <li className="profil-card-info-item">Prénom</li>
        <li className="profil-card-info-item">Adresse e-mail</li>
      </ul>
    </div>
  </main>
);


export default Profil;
