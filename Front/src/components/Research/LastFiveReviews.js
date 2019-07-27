import React from 'react';

// locals imports
import './research.scss';
import Review from 'src/components/Review';

const LastFiveReview = () => (
  <section className="section">
    <h3 className="section-title">Dernières notations de logement</h3>
    <Review className="section-reviews" />
    <Review className="section-reviews" />
    <Review className="section-reviews" />
    <Review className="section-reviews" />
  </section>
);

export default LastFiveReview;
