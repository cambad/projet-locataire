import React from 'react';

// locals imports
import './research.scss';
import Review from 'src/components/Review';

const LastFiveReview = () => (
  <section className="section">
    <Review className="section-reviews" />
    <Review className="section-reviews" />
    <Review className="section-reviews" />
    <Review className="section-reviews" />
  </section>
);

export default LastFiveReview;
