import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import NotationFormVisiteur from 'src/containers/ApartmentRating/notationFormVisiteur';
import NotationFormLocataire from 'src/containers/ApartmentRating/notationFormLocataire';
import PlaceAutocomplete from './placesAutocomplete';
import Commentaire from './commentaire';
import InformationGenerale from './informationGenerale';

import './apartmentRating.scss';

const ApartmentRating = ({
  address,
  isLocataire,
  isVisiteur,
  isDisplayed,
  isLocataireChange,
  isVisiteurChange,
  changeAddress,
  isStillInApartment,
  isNotLiveInApartment,
  floorNumber,
  location,
  floorArea,
  rent,
  numberOfRooms,
  changeFloorArea,
  changeFloorNumber,
  changeLocation,
  changeNumberOfRooms,
  changeRent,
  abstractedComment,
  positiveComment,
  negativeComment,
  changeAbstractedComment,
  changePositiveComment,
  changeNegativeComment,
  submitRatingForm,
  changeRecommendationPositive,
  changeRecommendationNegative,
}) => {
  const handleChange = (addressInput) => {
    changeAddress(addressInput);
  };

  const handleLocataire = () => {
    isLocataireChange();
  };

  const handleVisiteur = () => {
    isVisiteurChange();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitRatingForm();
  };

  return (
    <div className="notation-form">
      <PlaceAutocomplete
        address={address}
        handleChange={handleChange}
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
                <input className="radioButtons" type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={handleLocataire} />
                <label className="radioLabel" htmlFor="locataire/visiteur">Locataire</label>
                <input className="radioButtons" type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={handleVisiteur} />
                <label className="radioLabel" htmlFor="locataire/visiteur">Visiteur</label>
              </div>
            </div>
            {isDisplayed && (
              <InformationGenerale
                changeFloorNumber={changeFloorNumber}
                changeLocation={changeLocation}
                location={location}
                floorNumber={floorNumber}
                floorArea={floorArea}
                rent={rent}
                numberOfRooms={numberOfRooms}
                changeFloorArea={changeFloorArea}
                changeNumberOfRooms={changeNumberOfRooms}
                changeRent={changeRent}
              />
            )}
            {isLocataire && (
              <NotationFormLocataire
                isStillInApartment={isStillInApartment}
                isNotLiveInApartment={isNotLiveInApartment}
              />
            )}
            {isVisiteur && (
              <NotationFormVisiteur />
            )}
          </div>
          {isDisplayed && (
            <Commentaire
              isDisplayed={isDisplayed}
              abstractedComment={abstractedComment}
              positiveComment={positiveComment}
              negativeComment={negativeComment}
              changeAbstractedComment={changeAbstractedComment}
              changePositiveComment={changePositiveComment}
              changeNegativeComment={changeNegativeComment}
              changeRecommendationPositive={changeRecommendationPositive}
              changeRecommendationNegative={changeRecommendationNegative}
            />
          )}
          <button className={classNames({ 'form-submit-hidden': !isDisplayed, 'form-submit': isDisplayed })} onClick={handleSubmit} type="submit">Valider l'évalutation de cet appartement</button>
        </form>
      </div>
    </div>
  );
};

// PropTypes validation
ApartmentRating.propTypes = {
  address: PropTypes.string.isRequired,
  isLocataire: PropTypes.bool.isRequired,
  isVisiteur: PropTypes.bool.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  isLocataireChange: PropTypes.func.isRequired,
  isVisiteurChange: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  // getAddressLatLng: PropTypes.func.isRequired,
  isStillInApartment: PropTypes.func.isRequired,
  isNotLiveInApartment: PropTypes.func.isRequired,
  submitRatingForm: PropTypes.func.isRequired,
  changeRecommendationPositive: PropTypes.func.isRequired,
  changeRecommendationNegative: PropTypes.func.isRequired,
};

export default ApartmentRating;
