import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getSession, setSession} from '../actions/authActions';


class Account extends React.Component {
  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path) && this.getApproved !== null) {
      this.props.getSession(this.getRequestToken(path))
    } else if (localStorage.getItem('session_id')) {
      this.props.setSession(localStorage.getItem('session_id'));
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     ...state
  //   }
  // }

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

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSession: token => dispatch(getSession(token)),
    setSession: session_id => dispatch(setSession(session_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
