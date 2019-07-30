import React from 'react';
import Rating from '@material-ui/lab/Rating';

import './apartmentRating.scss';

const NotationFormLocataire = ({
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
}) => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <h1 className="notation">Notation de l'appartement</h1>
      <h2>Quartier</h2>
      <div className="quartier">
        <div>
          <label htmlFor="accesiblity">Accessibilité de l'appartement</label>
          <Rating
            name="accesiblity"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="environnement">Environnement urbain de l'appartement</label>
          <Rating
            name="environnement"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="circulation">Circulation</label>
          <Rating
            name="circulation"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
      <h2>État général de l'immeuble</h2>
      <div className="etatImmeuble">
        <div>
          <label htmlFor="exterior">État extérieur de l'immeuble</label>
          <Rating
            name="exterior"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="interior">État des parties communes de l'immeuble</label>
          <Rating
            name="interior"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
      <h2>Qualité de l'appartement</h2>
      <div className="etatAppart">
        <div>
          <label htmlFor="isolation">Isolation thermique et sonore</label>
          <Rating
            name="isolation"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="cleanliness">Propreté générale</label>
          <Rating
            name="cleanliness"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="light">Luminosité</label>
          <Rating
            name="light"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
      <h2>Relation avec le propriétaire et/ou à l'agence</h2>
      <div className="relations">
        <div>
          <label htmlFor="contact">Prise de contact agent/propriétaire</label>
          <Rating
            name="contact"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="contactQuality">Qualité de la relation lors de la location</label>
          <Rating
            name="contactQuality"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NotationFormLocataire;
