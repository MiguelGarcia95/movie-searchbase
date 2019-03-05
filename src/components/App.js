import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

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
        </Container>
      </section>
    );
  }
}

export default App;
