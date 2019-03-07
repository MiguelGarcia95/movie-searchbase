import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import {setSession} from '../actions/authActions';


class Account extends React.Component {
  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path) && this.getApproved !== null) {
      this.props.setSession(this.getRequestToken(path))
    }
  }

  getApproved = path => {
    if (path) {
      const approvedPath = path.match(new RegExp('&approved=(.*)'));
      return approvedPath.length > 1 ? approvedPath[1] : null;
    } else {
      return false;
    }
    
  }

  getRequestToken = path => {
    const tokenPath = path.match(new RegExp('request_token=(.*)&'));
    return tokenPath.length > 1 ? tokenPath[1] : null;
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSession: (token) => dispatch(setSession(token))
  }
}

export default connect(null, mapDispatchToProps)(Account);
