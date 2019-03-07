import React from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getSession} from '../actions/authActions';


class Account extends React.Component {
  componentDidMount() {
    const path = this.props.location.search;
    // console.log(this.getRequestToken(path))
    // console.log(this.getApproved(path))
    this.props.getSession(this.getRequestToken(path))
    // console.log(this.getPathParams(path, true));
    // console.log(this.getPathParams(path, false));
  }

  getApproved = path => {
    const approvedPath = path.match(new RegExp('&approved=(.*)'));
    return approvedPath.length > 1 ? approvedPath[1] : null;
  }

  getRequestToken = path => {
    const tokenPath = path.match(new RegExp('request_token=(.*)&'));
    return tokenPath.length > 1 ? tokenPath[1] : null;
  }

  // getPathParams = (path, many) => {
  //   let paramUrl = many ? path.match(new RegExp(`request_token=(.*)&`)) : path.match(new RegExp(`approved=(.*)`));
  //   return paramUrl.length > 1 ? paramUrl[1] : null;
  // }

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
    getSession: (token) => dispatch(getSession(token))
  }
}

export default connect(null, mapDispatchToProps)(Account);
