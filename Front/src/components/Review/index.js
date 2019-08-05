import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './review.scss';

const Review = ({ address }) => (
  <article className="review">
    <div className="review-img" />
    <div className="review-content">
      <h3 className="review-address">{address}</h3>
      <div className="review-description">
        <div className="review-note">note : 4</div>
        <div className="review-view">3 vues</div>
      </div>
    </div>
  </article>
);

Review.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Review;
