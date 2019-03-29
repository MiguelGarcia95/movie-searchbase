import React from 'react';

const isFavorite = (itemId, favorites) => {
  // return 'fas';
  return 'far';
}

const FavoriteCircle = () => {
  return (
    <section className="favorite_circle">
      <i class="far fa-heart"></i>
    </section>
  );
}

export default FavoriteCircle;