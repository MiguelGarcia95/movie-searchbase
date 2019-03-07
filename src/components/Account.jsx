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
    if (approvedPath.length > 1) {
      return approvedPath[1];
    } else {
      return null
    }
  }

  getRequestToken = path => {
    // const tokenPath = path.match(new RegExp('request_token=' + "(.*)" + '&'));
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
