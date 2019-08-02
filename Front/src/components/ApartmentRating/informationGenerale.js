import React from 'react';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const InformationGenerale = ({
  isAgency,
  isOwner,
  floorArea,
  rent,
  numberOfRooms,
  changeFloorArea,
  changeNumberOfRooms,
  changeRent,
}) => {

  const handleIsAgency = () => {
    isAgency();
  };

  const handleIsOwner = () => {
    isOwner();
  };

  const handleFloorArea = (event) => {
    const { value } = event.target;
    changeFloorArea(value);
  };

  const handleNumberOfRooms = (event) => {
    const { value } = event.target;
    changeNumberOfRooms(value);
  };

  const handleRent = (event) => {
    const { value } = event.target;
    changeRent(value);
  };

  return (
    <>
      <div className="information-generales-intermediaire">
        <div>
          <p>Intermédiaire :</p>
        </div>
        <div>
          <input onChange={handleIsAgency} className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Agence</label>
          <input onChange={handleIsOwner} className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Propriétaire</label>
        </div>
      </div>
      <div className="information-generales-surface">
        <div>
          <p>Surface au sol (en m²)</p>
          <input value={floorArea} onChange={handleFloorArea} type="text" name="surface-sol" id="surface-sol" />
        </div>
        <div>
          <p>Nombre de pièces</p>
          <input value={numberOfRooms} onChange={handleNumberOfRooms} type="text" name="roomsNb" id="roomsNb" />
        </div>
      </div>
      <div className="information-generales-loyer">
        <p>Loyer (en €, charges comprises)</p>
        <input value={rent} onChange={handleRent} type="text" name="loyer" id="loyer" />
      </div>
    </>
  );
};

// props validation
InformationGenerale.propTypes = {
  isAgency: PropTypes.func.isRequired,
  isOwner: PropTypes.func.isRequired,
  floorArea: PropTypes.number.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  rent: PropTypes.number.isRequired,
  changeFloorArea: PropTypes.func.isRequired,
  changeNumberOfRooms: PropTypes.func.isRequired,
  changeRent: PropTypes.func.isRequired,
};


export default InformationGenerale;
