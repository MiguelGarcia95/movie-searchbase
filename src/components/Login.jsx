import React from 'react';
import {connect} from 'react-redux';
import {getToken} from '../actions/authActions';

import './App.css';

class Login extends React.Component {
  render() {
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        
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
