import React from 'react';

import './App.css';

class Account extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search)
    console.log(this.getRequestToken(this.props.location.search))
    console.log(this.getApproved(this.props.location.search))
  }

  getApproved = path => {
    const approvedPath = path.match(new RegExp('&approved=(.*)'));
    return approvedPath.length > 1 ? approvedPath[1] : null;
    // if (approvedPath.length > 1) {
    //   return approvedPath[1];
    // } else {
    //   return null
    // }
  }

  getPathParam = (path, params) => {
    let paramUrl;
    if (params === 2) {
      paramUrl = path.match(new RegExp(`request_token=(.*)&`))
    } else if (params === 1) {
      paramUrl = path.match(new RegExp(`approved=(.*)`))
    }

  }

  getRequestToken = path => {
    const tokenPath = path.match(new RegExp('request_token=(.*)&'));
    if (tokenPath.length > 1) {
      return tokenPath[1];
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
      </div>
    );
  }
}

export default Account;
