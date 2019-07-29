import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import classNames from 'classnames';
import Rating from '@material-ui/lab/Rating';

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
  }

  handleChange = (address) => {
    console.log(address);
    this.setState({
      address,
    });
  };

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
    } = this.state;
    return (
      <div className="notation-form">
        <PlacesAutocomplete
          className="placeholder"
          value={address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
          }) => (
            <div className="adress-input">
              <input
                {...getInputProps({
                  placeholder: 'Adresse de l\'appartement ...',
                })}
              />
              <div className="autocomplete-dropdown">
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? {
                      backgroundColor: '#aaa',
                      cursor: 'pointer',
                      marginBottom: '1em',
                      borderRadius: '25px',
                      height: 'auto',
                      padding: '.5em',
                    }
                    : {
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      marginBottom: '1em',
                      borderRadius: '25px',
                      height: 'auto',
                      padding: '.5em',
                    };
                  return (
                    <div>
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span className="suggestion">{suggestion.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div>
          <form className="main-form">
            <div className="information-generales">
              <h1 className="information-generales-title">Informations générales</h1>
              <div className="information-generales-radio">
                <div>
                  <p>Je suis un :</p>
                </div>
                <div>
                  <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" />
                  <label htmlFor="locataire/visiteur">Locataire</label>
                  <input type="radio" name="locataire/visiteur" id="locataire/visiteur" value="locataire/visiteur" />
                  <label htmlFor="locataire/visiteur">Visiteur</label>
                </div>
              </div>
              <div className="information-generales-locataire">     
                <div>
                  <input type="radio" name="actual-location" id="actual-location" value="actual-location" />
                  <label htmlFor="actual-location">Je suis actuellement locataire</label>
                </div>
                <div>
                  <input type="radio" name="actual-location" id="actual-location" value="actual-location" />
                  <label htmlFor="actual-location">Je n'y habite plus</label>
                </div>
              </div>
              <div className="information-generales-intermediaire">
                <div>
                  <p>Intermédiaire :</p>
                </div>
                <div>
                  <input type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
                  <label htmlFor="agence/proprio">Agence</label>
                  <input type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
                  <label htmlFor="agence/proprio">Propriétaire</label>
                </div>
              </div>
              <div className="information-generales-surface">
                <div>
                  <div>
                    <p>Surface au sol (en m²)</p>
                  </div>
                  <div>
                    <input type="text" name="surface-sol" id="surface-sol" placeholder="..." />
                  </div>
                </div>
                <div>
                  <div>
                    <p>Nombre de pièces</p>
                  </div>
                  <div>
                    <input type="text" name="roomsNb" id="roomsNb" placeholder="..." />
                  </div>
                </div>
              </div>
              <div className="information-generales-loyer">
                <div>
                  <p>Loyer (en €, charges comprises)</p>
                </div>
                <div>
                  <input type="text" name="loyer" id="loyer" placeholder="..." />
                </div>
              </div>
            </div>
            <h1>Notation de l'appartement</h1>
            <h2>Quartier</h2>
            <div className="quartier">
              <div>
                <label htmlFor="accesiblity">Accessibilité de l'appartement</label>
                <Rating
                  className="stars"
                  name="accesiblity"
                  value={accesibilityValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      accesibilityValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="environnement">Environnement urbain de l'appartement</label>
                <Rating
                  className="stars"
                  name="environnement"
                  value={environnementValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      environnementValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="circulation">Circulation</label>
                <Rating
                  className="stars"
                  name="circulation"
                  value={circulationValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      circulationValue: newValue,
                    });
                  }}
                />
              </div>
            </div>
            <h2>État général de l'immeuble</h2>
            <div className="etatImmeuble">
              <div>
                <label htmlFor="exterior">État extérieur de l'immeuble</label>
                <Rating
                  className="stars"
                  name="exterior"
                  value={exteriorValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      exteriorValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="interior">État des parties communes de l'immeuble</label>
                <Rating
                  className="stars"
                  name="interior"
                  value={interiorValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      interiorValue: newValue,
                    });
                  }}
                />
              </div>
            </div>
            <h2>Qualité de l'appartement</h2>
            <div className="etatAppart">
              <div>
                <label htmlFor="isolation">Isolation thermique et sonore</label>
                <Rating
                  className="stars"
                  name="isolation"
                  value={isolationValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      isolationValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="cleanliness">Propreté générale</label>
                <Rating
                  className="stars"
                  name="cleanliness"
                  value={cleanlinessValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      cleanlinessValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="light">Luminosité</label>
                <Rating
                  className="stars"
                  name="light"
                  value={lightValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      lightValue: newValue,
                    });
                  }}
                />
              </div>
            </div>
            <h2>Relation avec le propriétaire et/ou à l'agence</h2>
            <div className="relations">
              <div>
                <label htmlFor="contact">Prise de contact agent/propriétaire</label>
                <Rating
                  className="stars"
                  name="contact"
                  value={contactValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      contactValue: newValue,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="contactQuality">Qualité de la relation lors de la location</label>
                <Rating
                  className="stars"
                  name="contactQuality"
                  value={contactQualityValue}
                  onChange={(newValue) => {
                    console.log(newValue);
                    this.setState({
                      contactQualityValue: newValue,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <h1 className="commentaire-title">Commentaires</h1>
              <h2>Votre avis général</h2>
              <input type="text" placeholder="Résumez votre avis, il servira de titre général" />
              <h2>Les plus de l'appartement</h2>
              <textarea name="" id="" cols="30" rows="10" placeholder="Les points positifs de l'appartement"></textarea>
              <h2>Les moins de l'appartement</h2>
              <textarea name="" id="" cols="30" rows="10" placeholder="Les points négatifs de l'appartement"></textarea>
              <p>De manière générale, recommanderiez-vous cet appartement à d'autres locataires ?</p>
              <input type="radio" name="recommendation" id="recommendation" />
              <label htmlFor="recommendation">Oui</label>
              <input type="radio" name="recommendation" id="recommendation" />
              <label htmlFor="recommendation">Non</label>
            </div>
            <button type="submit">Valier l'évalutation de cet appartement</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ApartmentRating;
