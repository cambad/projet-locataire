import React from 'react';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const InformationGenerale = ({ isStillInApartment, isNotLiveInApartment }) => {
  const handlestillInApartment = (event) => {
    // retrieve value to know if the person still live in the apartment
    const { checked } = event.target;
    isStillInApartment(checked);
  };

  const handlenotLiveInApartment = (event) => {
    // retrieve value to know if the person still live in the apartment
    const { checked } = event.target;
    isNotLiveInApartment(checked);
  };

  return (
    <>
      <div className="information-generales-locataire">
        <div>
          <input onChange={handlestillInApartment} className="radioButtons" type="radio" name="actual-location" id="actual-location" value="stillInApartment" />
          <label className="radioLabel" htmlFor="actual-location">Je suis actuellement locataire</label>
        </div>
        <div>
          <input onChange={handlenotLiveInApartment} className="radioButtons" type="radio" name="actual-location" id="actual-location" value="notLiveInApartment" />
          <label className="radioLabel" htmlFor="actual-location">Je n'y habite plus</label>
        </div>
      </div>
      <div className="information-generales-intermediaire">
        <div>
          <p>Intermédiaire :</p>
        </div>
        <div>
          <input className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Agence</label>
          <input className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Propriétaire</label>
        </div>
      </div>
      <div className="information-generales-surface">
        <div>
          <p>Surface au sol (en m²)</p>
          <input type="text" name="surface-sol" id="surface-sol" placeholder="..." />
        </div>
        <div>
          <p>Nombre de pièces</p>
          <input type="text" name="roomsNb" id="roomsNb" placeholder="..." />
        </div>
      </div>
      <div className="information-generales-loyer">
        <p>Loyer (en €, charges comprises)</p>
        <input type="text" name="loyer" id="loyer" placeholder="..." />
      </div>
    </>
  );
};

// props validation
InformationGenerale.propTypes = {
  isStillInApartment: PropTypes.func.isRequired,
  isNotLiveInApartment: PropTypes.func.isRequired,
};


export default InformationGenerale;
