// npm import
import React from 'react';
import PropTypes from 'prop-types';

// data
import formTenant from 'src/data/formTenant';

// local import
import './apartmentRating.scss';
import NotationFormElement from './NotationFormElement';

// component
const NotationFormLocataire = ({
  tenantValue,
  changeStarNumber,
  isStillInApartment,
  isNotLiveInApartment,
}) => {
  const handlestillInApartment = (event) => {
    // retrieve value to know if the person still live in the apartment
    const { checked } = event.target;
    isStillInApartment(checked);
  };

  const handlenotLiveInApartment = (event) => {
    // retrieve value to know if the person doesn't live in the apartment
    const { checked } = event.target;
    isNotLiveInApartment(checked);
  };

  const { tenantForm } = formTenant;
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
      <h1 className="notation">Notation de l'appartement</h1>
      <h2>Quartier</h2>
      <div className="quartier">
        {tenantForm.apartment.map((currentElement) => {
          const { id } = currentElement;
          // send the good notation to the good component
          const notation = tenantValue[currentElement.nameValue];
          return (
            <NotationFormElement
              key={id}
              {...currentElement}
              notation={notation}
              changeStarNumber={changeStarNumber}
            />
          );
        })}
      </div>
      <h2>État général de l'immeuble</h2>
      <div className="etatImmeuble">
        {tenantForm.buildingConditions.map((currentElement) => {
          const { id } = currentElement;
          // send the good notation to the good component
          const notation = tenantValue[currentElement.nameValue];
          return (
            <NotationFormElement
              key={id}
              {...currentElement}
              notation={notation}
              changeStarNumber={changeStarNumber}
            />
          );
        })}
      </div>
      <h2>Qualité de l'appartement</h2>
      <div className="etatAppart">
        {tenantForm.apartmentQualities.map((currentElement) => {
          const { id } = currentElement;
          // send the good notation to the good component
          const notation = tenantValue[currentElement.nameValue];
          return (
            <NotationFormElement
              key={id}
              {...currentElement}
              notation={notation}
              changeStarNumber={changeStarNumber}
            />
          );
        })}
      </div>
      <h2>Relation avec le propriétaire et/ou à l'agence</h2>
      <div className="relations">
        {tenantForm.neighborhoodRelationship.map((currentElement) => {
          const { id } = currentElement;
          // send the good notation to the good component
          const notation = tenantValue[currentElement.nameValue];
          return (
            <NotationFormElement
              key={id}
              {...currentElement}
              notation={notation}
              changeStarNumber={changeStarNumber}
            />
          );
        })}
      </div>
    </>
  );
};

// Proptypes validation
NotationFormLocataire.propTypes = {
  tenantValue: PropTypes.object.isRequired,
  changeStarNumber: PropTypes.func.isRequired,
  isStillInApartment: PropTypes.func.isRequired,
  isNotLiveInApartment: PropTypes.func.isRequired,
};

// export default
export default NotationFormLocataire;
