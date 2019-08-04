import React from 'react';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const InformationGenerale = ({
  floorNumber,
  location,
  floorArea,
  rent,
  numberOfRooms,
  changeFloorNumber,
  changeLocation,
  changeFloorArea,
  changeNumberOfRooms,
  changeRent,
}) => {

  const handleFloorNumber = () => {
    // isAgency();
    changeFloorNumber();
  };

  const handleLocation = (event) => {
    // isOwner();
    const { value } = event.target;
    changeLocation(value);
  };

  const handleFloorArea = (event) => {
    const { value } = event.target;

    // console.log(typeof(value));
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
      {/* <div className="information-generales-intermediaire"> */}
        {/* <div>
          <p>Intermédiaire :</p>
        </div>
        <div>
          <input onChange={handleIsAgency} className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Agence</label>
          <input onChange={handleIsOwner} className="radioButtons" type="radio" name="agence/proprio" id="agence/proprio" value="agence/proprio" />
          <label className="radioLabel" htmlFor="agence/proprio">Propriétaire</label>
        </div> */}
        
      {/* </div> */}
      <div className="information-generales-surface">
        <div>
          <p>Etage</p>
          <input value={floorNumber} onChange={handleFloorNumber} type="number" name="floor_number" id="floor_number" />
        </div>
        <div className="location">
          <p>Localisation</p>
          <input value={location} onChange={handleLocation} type="text" name="location" id="location" placeholder="ex: 65, 1ère porte à droite,..." />
        </div>
        <div>
          <p>Surface au sol (en m²)</p>
          <input value={floorArea} onChange={handleFloorArea} type="number" name="surface-sol" id="surface-sol" />
        </div>
        <div>
          <p>Nombre de pièces</p>
          <input value={numberOfRooms} onChange={handleNumberOfRooms} type="number" name="roomsNb" id="roomsNb" />
        </div>
      </div>
      <div className="information-generales-loyer">
        <p>Loyer (en €, charges comprises)</p>
        <input value={rent} onChange={handleRent} type="number" name="rent" id="rent" />
      </div>
    </>
  );
};

// props validation
InformationGenerale.propTypes = {
  floorNumber: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  floorArea: PropTypes.number.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  rent: PropTypes.number.isRequired,
  changeFloorArea: PropTypes.func.isRequired,
  changeFloorNumber: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  changeNumberOfRooms: PropTypes.func.isRequired,
  changeRent: PropTypes.func.isRequired,
};


export default InformationGenerale;
