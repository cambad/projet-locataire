import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';

import './apartment.scss';

const Apartment = () => (
  <main className="main">
    <div className="info">
      <div className="generales">
        <h3 className="generales-address">65 chemin des voirons 74800 Arenthon</h3>
        <div className="generales-notation">
          <h3 className="generales-title">Note générale</h3>
          <Rating
            name="simple-controlled"
            max={5}
            value={3}
            readOnly
          />
        </div>
      </div>
      <div className="caract">
        <h3 className="caract-item">Loyer : 800</h3>
        <h3 className="caract-item"> Charges comprises : non</h3>
        <h3 className="caract-item">Surface au sol (en m²) : 65</h3>
        <h3 className="caract-item">Type d'appartement : XXX</h3>
      </div>
      <article className="notation">
        <h2 className="notation-title">Titre de la review</h2>
        <div className="notation-img">
          <div className="img" />
        </div>
        <div className="notation-review">
          <div className="notation-review-item">
            <h3>Quartier</h3>
            <Rating
              name="simple-controlled"
              max={5}
              value={3}
              readOnly
            />
          </div>
          <div className="notation-review-item">
            <h3>Etat général de l'immeuble</h3>
            <Rating
              name="simple-controlled"
              max={5}
              value={3}
              readOnly
            />
          </div>
          <div className="notation-review-item">
            <h3>Qualité de l'appartement</h3>
            <Rating
              name="simple-controlled"
              max={5}
              value={3}
              readOnly
            />
          </div>
          <div className="notation-review-item">
            <h3>Relation au propriétaire et/ou à l'agence</h3>
            <Rating
              name="simple-controlled"
              max={5}
              value={3}
              readOnly
            />
          </div>
        </div>
        <div className="notation-comments">
          <TiPlusOutline className="icon-plus" /><p className="notation-comments-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam facilis accusantium sed ullam molestiae obcaecati voluptatem officia error. Soluta?</p>
          <TiMinusOutline className="icon-minus" /><p className="notation-comments-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus mollitia dolorem possimus fugiat quos at dicta adipisci corporis non quae?</p>
        </div>
      </article>
    </div>
  </main>
);


export default Apartment;
