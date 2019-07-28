import React from 'react';

// locals imports
import lastFiveAppart from 'src/data/lastFive';
import './research.scss';
import Review from 'src/components/Review';

const LastFiveReview = () => {
  const { apartments } = lastFiveAppart;
  return (
    <section className="section">
      <h3 className="section-title">Dernières notations de logement</h3>
      {apartments.map(appartment => (
        <Review key={appartment.id} className="section-reviews" {...appartment} />
      ))}
    </section>
  );
};


export default LastFiveReview;
