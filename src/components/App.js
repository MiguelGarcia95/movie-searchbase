import React from 'react';
import { Container, Row, Col, CardImg} from 'reactstrap';

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
        <Container fluid={true} style={{width: '100%', padding: '100px 50px'}}>
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
          <ContentSlider />
        </Container>
        {/* Footer */}
        <Container fluid={true} style={{height: '200px', width: '100%', padding: '50px', backgroundColor: '#232323', color: '#fff'}}>
          <Row style={{height: '50%', margin: '0'}}>
            {/* <Col xs='2' style={{padding: '0'}}><p>Movie-SB</p></Col>
            <Col xs='1' style={{padding: '0'}}><p>Home</p></Col>
            <Col xs='1' style={{padding: '0'}}><p>Account</p></Col>
            <Col xs='1' style={{padding: '0'}}><p>Login</p></Col> */}
            {/* <Col xs='2' style={{padding: '0'}}> */}
            <Col xs={{ size: '2', offset: 5 }} style={{padding: '0'}}>
              <CardImg top width="100%" src="/images/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="Card image cap" />
            </Col>
          </Row>
          <Row style={{height: '25%', margin: '0', marginTop: '50px'}}>
            <Col xs='3' style={{padding: '0'}}><p>Copyright ©2019 - Created by Miguel Garcia</p></Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default App;
