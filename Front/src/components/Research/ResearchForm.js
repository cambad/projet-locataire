import React from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// locals imports
import './research.scss';


const ResearchForm = ({ address, handleChange }) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    if (address) {
      geocodeByAddress(address)
        .then((results) => {
          return (getLatLng(results[0]));
        })
        .then((latLng) => {
          console.log(latLng);
        })
        .catch(error => console.error('Error', error));
    }
  };

  return (
    <form className="recherche-form">
      <input className="recherche-input" type="text" placeholder="Entrer une ville ou une adresse" value={address} onChange={handleChange} />
      <NavLink to="/recherche/"><button onClick={handleClick} className="recherche-submit" type="submit">Rechercher</button></NavLink>
    </form>
  );
};

ResearchForm.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ResearchForm;
