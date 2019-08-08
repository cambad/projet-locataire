import React from 'react';
import { NavLink } from 'react-router-dom';

import './404.scss';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h1>4<span></span>4</h1>
      </div>
      <h2>Oops! Page non trouvée</h2>
      <p>
        Désolé mais la page que vous recherchez n'existe pas ou a été supprimée.
      </p>
      <a><NavLink to="/">Retour à l'accueil</NavLink></a>
    </div>
  </div>
);

// This templates was made by Colorlib (https://colorlib.com)

export default NotFound;
