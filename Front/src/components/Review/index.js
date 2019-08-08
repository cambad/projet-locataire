import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

// locals imports
import './review.scss';

const Review = ({
  address,
  contact,
  exterior,
  interior,
  recommendation,
  rental,
  title,
}) => {
  const average = (contact + exterior + interior + recommendation) / 4;
  return (
    <article className="review">
      <div className="review-img">
        <p className="review-title">"{title}"</p>
      </div>
      <div className="review-content">
        <h3 className="review-address">{address}</h3>
        <div className="review-description">
          <div className="review-note">loyer : {rental}€</div>
          <div className="review-view">
          Note moyenne
            <Rating
              value={average}
              size="small"
              readOnly
            />
          </div>
        </div>
      </div>
    </article>
  );
};

Review.propTypes = {
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contact: PropTypes.number.isRequired,
  exterior: PropTypes.number.isRequired,
  interior: PropTypes.number.isRequired,
  recommendation: PropTypes.number.isRequired,
  rental: PropTypes.number.isRequired,
};

export default Review;
