import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';

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
