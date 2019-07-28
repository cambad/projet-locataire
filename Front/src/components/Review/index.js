import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './review.scss';

const Review = ({ adress }) => (
  <article className="review">
    <div className="review-img" />
    <div className="review-content">
      <h3 className="review-address">{adress}</h3>
      <div className="review-description">
        <div className="review-note">note : 4</div>
        <div className="review-view">3 vues</div>
      </div>
    </div>
  </article>
);

Review.propTypes = {
  adress: PropTypes.string.isRequired,
};

export default Review;
