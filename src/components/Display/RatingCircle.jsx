import React from 'react';

const RatingCircle = ({rating}) => {
  return (
    <section title='rating' className="rating_circle circle">
      <section className="outer_circle circle">
        <section className="inner_circle circle">
          <h2>{rating}</h2>
        </section>
      </section>
    </section>
  );
}

export default RatingCircle;