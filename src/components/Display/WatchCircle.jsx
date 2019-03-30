import React from 'react';

const wantToWatch = (itemId, favorites) => {
  // return 'fas';
  return 'far';
}

const WatchCircle = () => {
  return (
    <section className="favorite_circle circle">
      <i className="fas fa-eye-slash"></i>
      {/* <i className="fas fa-eye "></i> */}
    </section>
  );
}

export default WatchCircle;