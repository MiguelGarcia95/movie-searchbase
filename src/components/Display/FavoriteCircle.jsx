import React from 'react';

const isFavorite = (itemId, favorites) => {
  // return 'fas';
  return 'far';
}

const FavoriteCircle = () => {
  return (
    <section className="favorite_circle circle">
      <i className="far fa-heart fa-2x" ></i>
    </section>
  );
}

export default FavoriteCircle;