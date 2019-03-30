import React from 'react';

const isFavorite = (itemId, favorites) => {
  // return 'fas';
  return 'far';
}

const FavoriteCircle = ({movie, type, addToFavorites, account, sessionId}) => {
  return (
    <section className="favorite_circle circle" onClick={() => addToFavorites(account.id, sessionId, type, movie.id)} >
      <i className="fas fa-heart fa-2x" ></i>
    </section>
  );
}

export default FavoriteCircle;