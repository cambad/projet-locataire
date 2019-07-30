import React from 'react';
import classNames from 'classnames';

import PlaceAutocomplete from './placesAutocomplete';
import Commentaire from './commentaire';
import InformationGenerale from './informationGenerale';
import NotationFormLocataire from './notationFormLocataire';
import NotationFormVisiteur from './notationFormVisiteur';

import './apartmentRating.scss';

class ApartmentRating extends React.Component {
  state = {
    address: '',
    accesibilityValue: 0,
    environnementValue: 0,
    circulationValue: 0,
    exteriorValue: 0,
    interiorValue: 0,
    isolationValue: 0,
    cleanlinessValue: 0,
    lightValue: 0,
    contactValue: 0,
    contactQualityValue: 0,
    recommendationValue: 0,
    isVisiteur: false,
    isLocataire: false,
    isDisplayed: false,
  }

  handleChange = (address) => {
    console.log(address);
    this.setState({
      address,
    });
  };

  handleLocataire = () => {
    this.setState({
      isVisiteur: false,
      isLocataire: true,
      isDisplayed: true,
    });
  }

  handleVisiteur = () => {
    this.setState({
      isVisiteur: true,
      isLocataire: false,
      isDisplayed: true,
    });
  }

  render() {
    const {
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
    } = this.state;
    return (
      <div className="notation-form">
        <PlaceAutocomplete
          address={address}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
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
                  <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={this.handleLocataire} />
                  <label htmlFor="locataire/visiteur">Locataire</label>
                  <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" onChange={this.handleVisiteur} />
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
                  exteriorValue={exteriorValue}
                  interiorValue={interiorValue}
                  contactValue={contactValue}
                />
              )}
            </div>
            {isDisplayed && <Commentaire isDisplayed={isDisplayed} />}
            <button className={classNames({ 'form-submit-hidden': !isDisplayed, 'form-submit': isDisplayed })} type="submit">Valider l'évalutation de cet appartement</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ApartmentRating;
