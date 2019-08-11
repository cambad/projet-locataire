import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const Commentaire = ({
  isDisplayed,
  abstractedComment,
  positiveComment,
  negativeComment,
  changeAbstractedComment,
  changePositiveComment,
  changeNegativeComment,
}) => {
  const handleAbstractedComment = (event) => {
    const { value } = event.target;
    changeAbstractedComment(value);
  };

  const handlePositiveComment = (event) => {
    const { value } = event.target;
    changePositiveComment(value);
  };

  const handleNegativeComment = (event) => {
    const { value } = event.target;
    changeNegativeComment(value);
  };

  return (
    <div className={classNames({ 'commentaires-hidden': !isDisplayed, commentaires: isDisplayed })}>
      <h1 className="commentaire-title">Commentaires</h1>
  
      <h2 className="commentaire-subtitle">Votre avis général</h2>
  
      <input value={abstractedComment} onChange={handleAbstractedComment} className="commentaire-user-title" type="text" placeholder="Résumez votre avis, il servira de titre général" />
  
      <h2 className="commentaire-positifs">Les plus de l'appartement</h2>
  
      <textarea value={positiveComment} onChange={handlePositiveComment} className="commentaire-positifs-area" name="" id="" cols="30" rows="10" placeholder="Les points positifs de l'appartement" />
  
      <h2>Les moins de l'appartement</h2>
  
      <textarea value={negativeComment} onChange={handleNegativeComment} className="commentaire-negatifs-area" name="" id="" cols="30" rows="10" placeholder="Les points négatifs de l'appartement" />
  
    </div>
  );
};


// props validation
Commentaire.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  abstractedComment: PropTypes.string.isRequired,
  positiveComment: PropTypes.string.isRequired,
  negativeComment: PropTypes.string.isRequired,
  changeAbstractedComment: PropTypes.func.isRequired,
  changePositiveComment: PropTypes.func.isRequired,
  changeNegativeComment: PropTypes.func.isRequired,
};

export default Commentaire;
