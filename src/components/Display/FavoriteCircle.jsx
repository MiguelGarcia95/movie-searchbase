import React from 'react';

const FavoriteCircle = ({movie, type, addToFavorites, account, sessionId}) => {
  return (
    <section className="favorite_circle circle" title='Add To Favorites' onClick={() => addToFavorites(account.id, sessionId, type, movie.id, true)} >
      <i className="fas fa-heart fa-2x" ></i>
    </section>
  );
}

export default FavoriteCircle;