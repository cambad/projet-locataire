import React from 'react';

// locals imports
import './review.scss';

const Review = () => (
  <article className="review">
    <div className="review-img" />
    <div className="review-content">
      <h3 className="review-address">65 chemin des voirons</h3>
      <div className="review-description">
        <div className="review-note">note : 4</div>
        <div className="review-view">3 vues</div>
      </div>
    </div>
  </article>
);

export default Review;
