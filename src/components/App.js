import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Container fluid={true} style={{background: 'red', height: '100vh', width: '100%', padding: '0'}}>
          <Row style={{margin: '0'}} >
          <Col xs="6">.col-6</Col>
          <Col xs="6">
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
          </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default App;
