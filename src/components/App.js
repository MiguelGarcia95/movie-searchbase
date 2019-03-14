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
        {/* <Container fluid={true} style={{width: '100%', padding: '100px 50px'}}>
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
        </Container> */}
      </section>
    );
  }
}

export default App;
