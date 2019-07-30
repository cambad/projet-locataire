import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PlaceAutocomplete from './placesAutocomplete';
import Commentaire from './commentaire';
import InformationGenerale from './informationGenerale';
import NotationFormLocataire from './notationFormLocataire';
import NotationFormVisiteur from './notationFormVisiteur';

import './apartmentRating.scss';

const ApartmentRating = ({
  address,
  accesibilityValue,
  environnementValue,
  circulationValue,
  exteriorValue,
  interiorValue,
  isolationValue,
  cleanlinessValue,
  lightValue,
  contactValue,
  contactQualityValue,
  recommendationValue,
  isLocataire,
  isVisiteur,
  isDisplayed,
  isLocataireChange,
  isVisiteurChange,
  changeAdress,
  recommendationChange,
  exteriorChange,
  interiorChange,
  contactChange,
}) => {

  const handleChange = (addressInput) => {
    changeAdress(addressInput);
  };

  const handleLocataire = () => {
    isLocataireChange();
  };

  const handleVisiteur = () => {
    isVisiteurChange();
  };

  return (
    <div className="notation-form">
      <PlaceAutocomplete
        address={address}
        handleChange={handleChange}
        // handleSelect={handleSelect}
      />
      <div>
        <form className="main-form">
          <div className="information-generales">
            <h1 className="information-generales-title">Informations générales</h1>
            <div className="information-generales-radio">
              <div>
                <p>Je suis un :</p>
              </div>
              <div>
                <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={handleLocataire} />
                <label htmlFor="locataire/visiteur">Locataire</label>
                <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={handleVisiteur} />
                <label htmlFor="locataire/visiteur">Visiteur</label>
              </div>
            </div>
            {isDisplayed && <InformationGenerale />}
            {isLocataire && (
              <NotationFormLocataire
                accesibilityValue={accesibilityValue}
                environnementValue={environnementValue}
                circulationValue={circulationValue}
                exteriorValue={exteriorValue}
                interiorValue={interiorValue}
                isolationValue={isolationValue}
                cleanlinessValue={cleanlinessValue}
                lightValue={lightValue}
                contactValue={contactValue}
                contactQualityValue={contactQualityValue}
              />
            )}
            {isVisiteur && (
              <NotationFormVisiteur
                recommendationValue={recommendationValue}
                recommendationChange={recommendationChange}
                exteriorValue={exteriorValue}
                exteriorChange={exteriorChange}
                interiorValue={interiorValue}
                interiorChange={interiorChange}
                contactValue={contactValue}
                contactChange={contactChange}
              />
            )}
          </div>
          {isDisplayed && <Commentaire isDisplayed={isDisplayed} />}
          <button className={classNames({ 'form-submit-hidden': !isDisplayed, 'form-submit': isDisplayed })} type="submit">Valider l'évalutation de cet appartement</button>
        </form>
      </div>
    </div>
  );
};

// PropTypes validation
ApartmentRating.propTypes = {
  address: PropTypes.string.isRequired,
  // accesibilityValue: PropTypes.number.isRequired,
  // environnementValue: PropTypes.number.isRequired,
  // circulationValue: PropTypes.number.isRequired,
  // exteriorValue: PropTypes.number.isRequired,
  // interiorValue: PropTypes.number.isRequired,
  // isolationValue: PropTypes.number.isRequired,
  // cleanlinessValue: PropTypes.number.isRequired,
  // lightValue: PropTypes.number.isRequired,
  // contactValue: PropTypes.number.isRequired,
  // contactQualityValue: PropTypes.number.isRequired,
  // recommendationValue: PropTypes.number.isRequired,
  isLocataire: PropTypes.bool.isRequired,
  isVisiteur: PropTypes.bool.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  isLocataireChange: PropTypes.func.isRequired,
  isVisiteurChange: PropTypes.func.isRequired,
  changeAdress: PropTypes.func.isRequired,
};

export default ApartmentRating;
