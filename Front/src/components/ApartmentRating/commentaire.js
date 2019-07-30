import React from 'react';
import classNames from 'classnames';

import './apartmentRating.scss';

const Commentaire = ({ isDisplayed }) => (
  <div className={classNames({ 'commentaires-hidden': !isDisplayed, commentaires: isDisplayed })}>
    <h1 className="commentaire-title">Commentaires</h1>
    <h2 className="commentaire-subtitle">Votre avis général</h2>
    <input className="commentaire-user-title" type="text" placeholder="Résumez votre avis, il servira de titre général" />
    <h2 className="commentaire-positifs">Les plus de l'appartement</h2>
    <textarea className="commentaire-positifs-area" name="" id="" cols="30" rows="10" placeholder="Les points positifs de l'appartement"></textarea>
    <h2>Les moins de l'appartement</h2>
    <textarea className="commentaire-negatifs-area" name="" id="" cols="30" rows="10" placeholder="Les points négatifs de l'appartement"></textarea>
    <p className="commentaire-p">De manière générale, recommanderiez-vous cet appartement à d'autres locataires ?</p>
    <input type="radio" name="recommendation" id="recommendation" />
    <label className="commentaire-yes-label" htmlFor="recommendation">Oui</label>
    <input type="radio" name="recommendation" id="recommendation" />
    <label htmlFor="recommendation">Non</label>
  </div>
);

export default Commentaire;
