import React from 'react';

const wantToWatch = (itemId, favorites) => {
  // return 'fas';
  return 'far';
}

const WatchCircle = () => {
  return (
    <section className="watch_circle circle">
      {/* <i className="fas fa-eye-slash"></i> */}
      <i className="fas fa-eye fa-2x"></i>
    </section>
  );
}

export default WatchCircle;