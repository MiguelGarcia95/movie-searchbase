import React from 'react';

import './App.css';
import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <HomeDisplay />
        <HomeContent />
      </section>
    );
  }
}

export default App;
