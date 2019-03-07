import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container, Button, Row, Col} from 'reactstrap';

import {getToken} from '../actions/authActions';

import './App.css';

class Login extends React.Component {
  render() {
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        <Jumbotron fluid style={{paddingTop: '110px', backgroundColor: '#444', color: 'white'}}>
          <Container fluid style={{textAlign:'center'}}>
            <h1 className="display-3">Login</h1>
            <p className="lead">It'll redirect you to The MovieDB</p>
          </Container>
        </Jumbotron>
        <Container>
          {/* <Row style={{height: '25%', margin: '0', marginTop: '50px'}}> */}
          <Row>
            <Col xs={{ size: '4', offset: 4 }} style={{padding: '0'}}>
              <Button color="primary" size="lg" block>Block level button</Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(getToken())
  }
}

export default connect(null, mapDispatchToProps)(Login);
