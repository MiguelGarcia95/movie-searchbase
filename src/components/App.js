import React from 'react';
import { Container} from 'reactstrap';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'; 
import './App.css';
import ContentSlider from './layout/ContentSlider';
import HomeDisplay from './Home/HomeDisplay';
import HomeContent from './Home/HomeContent';

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <HomeDisplay />
        <HomeContent />
        {/* 
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
        */}
      </section>
    );
  }
}

export default App;
