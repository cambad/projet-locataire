import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const NotationFormVisiteur = ({
  recommendationValue,
  recommendationChange,
  exteriorValue,
  exteriorChange,
  interiorValue,
  interiorChange,
  contactValue,
  contactChange,
}) => {
  // const [value, setValue] = React.useState(0);
  /* TODO : Tester avec les hooks
    onChange={(event, newValue) => {
              setValue(newValue);
            }}
  */
  
  const onChangeRecommendation = (e) => {
    // Retrieve star number
    const { value } = e.target;
    recommendationChange(value);
  };

  const onChangeExterior = (e) => {
    // Retrieve star number
    const { value } = e.target;
    exteriorChange(value);
  };

  const onChangeInterior = (e) => {
    // Retrieve star number
    const { value } = e.target;
    interiorChange(value);
  };

  const onChangeContact = (e) => {
    // Retrieve star number
    const { value } = e.target;
    contactChange(value);
  };

  return (
    <>
      <h1 className="notation">Notation de l'appartement</h1>
      <div className="quartier">
        <div>
          <label htmlFor="recommendation">Recommandez-vous ce quartier ?</label>
          <Rating
            name="recommendation"
            value={recommendationValue}
            onChange={onChangeRecommendation}
          />
        </div>
        <div>
          <label htmlFor="exteriorValue">Etat général de l'immeuble</label>
          <Rating
            name="exteriorValue"
            value={exteriorValue}
            onChange={onChangeExterior}
          />
        </div>
        <div>
          <label htmlFor="interiorValue">Qualité de l'appartement</label>
          <Rating
            name="interiorValue"
            value={interiorValue}
            onChange={onChangeInterior}
          />
        </div>
        <div>
          <label htmlFor="contactValue">Contact propriétaire et/ou agent</label>
          <Rating
            name="contactValue"
            value={contactValue}
            onChange={onChangeContact}
          />
        </div>
      </div>
    </>
  );
};

// Proptypes validation
NotationFormVisiteur.propTypes = {
  recommendationValue: PropTypes.number.isRequired,
  recommendationChange: PropTypes.func.isRequired,
  exteriorValue: PropTypes.number.isRequired,
  exteriorChange: PropTypes.func.isRequired,
  interiorValue: PropTypes.number.isRequired,
  interiorChange: PropTypes.func.isRequired,
  contactValue: PropTypes.number.isRequired,
  contactChange: PropTypes.func.isRequired,
};

export default NotationFormVisiteur;
