import React from 'react';

const WatchCircle = ({movie, type, addToWatchlist, account, sessionId}) => {
  return (
    <section className="watch_circle circle" title='Add To Watchlist' onClick={() => addToWatchlist(account.id, sessionId, type, movie.id)} >
      <i className="fas fa-eye fa-2x"></i>
    </section>
  );
}

export default WatchCircle;