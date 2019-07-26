import React from 'react';

// locals imports
import './research.scss';

const ResearchForm = () => (
  <form className="recherche-form">
    <input className="recherche-input" type="text" placeholder="Entrer une ville ou une adresse" />
    <button className="recherche-submit" type="submit">Rechercher</button>
  </form>
);

export default ResearchForm;
