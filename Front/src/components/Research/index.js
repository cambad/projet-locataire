import React from 'react';
import { NavLink } from 'react-router-dom';

// locals imports
import './research.scss';
import ResearchForm from './ResearchForm';
import LastFiveReviews from './LastFiveReviews';

const Research = () => (
  <main className="accueil">
    <div className="homePhoto">
      <div className="presentation">
        <h2 className="presentation-title">Bienvenue sur Rate my Rent</h2>
        <h4 className="presentation-subtitle">Le site de notation des bons et mauvais appartements</h4>
      </div>
      <div className="recherche">
        <div className="recherche-zone">
          <h2 className="recherche-title">Rechercher un appartement</h2>
          <ResearchForm />
        </div>
        <div className="noter">
          <h1 className="noter-title">
            A votre tour, notez votre logement !
          </h1>
          <NavLink to="/noter-un-appartement"><button className="noter-button" type="button">Noter un logement</button></NavLink>
        </div>
      </div>
    </div>
    <LastFiveReviews />
  </main>
);

export default Research;
