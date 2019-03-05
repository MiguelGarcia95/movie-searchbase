import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContentSlider from './layout/ContentSlider';
import './App.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'; 

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Container fluid={true} style={{height: '100vh', width: '100%', padding: '0', paddingTop: '56px'}}>
          <Row style={{margin: '0', height: '80%'}} >
            <Col xs="6" style={{background: 'red', padding: '0'}}>.col-6</Col>
            <Col xs="6" style={{padding: '0'}}>
              <Row style={{margin: '0', height: '50%'}}>
                <Col style={{background: 'red', padding: '0'}} xs="6">.col-6</Col>
                <Col style={{background: 'red', padding: '0'}} xs="6">.col-6</Col>
              </Row>
              <Row style={{margin: '0', height: '50%'}}>
                <Col style={{background: 'red', padding: '0'}} xs="6">.col-6</Col>
                <Col style={{background: 'red', padding: '0'}} xs="6">.col-6</Col>
              </Row>
            </Col>
          </Row>
          <Row style={{margin: '0', height: '20%'}} >
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
            <Col xs="2" style={{background: 'blue', padding: '0'}}>.col-2</Col>
          </Row>
        </Container>
        {/* <Container fluid={true} style={{height: '100vh', width: '100%', padding: '0', paddingTop: '56px'}}> */}
        <Container fluid={true} style={{width: '100%', padding: '100px 50px'}}>
          <ContentSlider />
          <ContentSlider />
        </Container>
      </section>
    );
  }
}

export default App;
