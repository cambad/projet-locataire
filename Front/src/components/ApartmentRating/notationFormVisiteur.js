import React from 'react';
import Rating from '@material-ui/lab/Rating';

import './apartmentRating.scss';

const NotationFormVisiteur = ({
  recommendationValue,
  exteriorValue,
  interiorValue,
  contactValue,
}) => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <h1 className="notation">Notation de l'appartement</h1>
      <div className="quartier">
        <div>
          <label htmlFor="recommendation">Recommandez-vous ce quartier ?</label>
          <Rating
            name="recommendation"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="exteriorValue">Etat général de l'immeuble</label>
          <Rating
            name="exteriorValue"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="interiorValue">Qualité de l'appartement</label>
          <Rating
            name="interiorValue"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <label htmlFor="contactValue">Contact propriétaire et/ou agent</label>
          <Rating
            name="contactValue"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default NotationFormVisiteur;
