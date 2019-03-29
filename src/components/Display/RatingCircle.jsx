import React from 'react';

const RatingCircle = ({rating}) => {
  return (
    <section className="rating_circle">
      <section className="inner_circle">
        <h2>{rating}</h2>
      </section>
    </section>
  );
}

export default RatingCircle;