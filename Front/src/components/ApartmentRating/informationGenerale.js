import React from 'react';

import './apartmentRating.scss';

const InformationGenerale = () => (
  <>
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
          <div>
            <p>Surface au sol (en m²)</p>
          </div>
          <div>
            <input type="text" name="surface-sol" id="surface-sol" placeholder="..." />
          </div>
          <div>
            <p>Nombre de pièces</p>
          </div>
          <div>
            <input type="text" name="roomsNb" id="roomsNb" placeholder="..." />
          </div>
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
  </>
);

export default InformationGenerale;
