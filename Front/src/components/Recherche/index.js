import React from 'react';

import './recherche.scss';

const Recherche = () => (
  <main className="accueil">
    <div className="photo">
      <div className="presentation">
        <h2 className="presentation-title">Bienvenue sur SmartRenting</h2>
        <h4 className="presentation-subtitle">Le site de notation des bons et mauvais appartements</h4>
      </div>
      <div className="recherche">
        <div className="recherche-zone">
          <h2 className="recherche-title">Rechercher un appartement</h2>
          <form className="recherche-form">
            <input className="recherche-input" type="text" placeholder="Veuillez entrer une ville ou une adresse" />
            <button className="recherche-submit" type="submit">Rechercher</button>
          </form>
        </div>
        <div className="noter">
          <h1 className="noter-title">
            A votre tour, notez votre logement !
          </h1>
          <button className="noter-button" type="button"><a href="#">Noter un logement</a></button>
        </div>
      </div>
    </div>
  </main>
);

export default Recherche;
