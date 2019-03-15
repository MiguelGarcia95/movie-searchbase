import React from 'react';

import './App.css';
import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';

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
