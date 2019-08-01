import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './research.scss';


const ResearchForm = ({ address, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="recherche-form">
    <input className="recherche-input" type="text" placeholder="Entrer une ville ou une adresse" value={address} onChange={handleChange} />
    <button className="recherche-submit" type="submit">Rechercher</button>
  </form>
);

ResearchForm.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResearchForm;
