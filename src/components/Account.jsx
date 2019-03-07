import React from 'react';

import './App.css';

class Account extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search)
  }

  getApproved = path => {

  }

  getRequestToken = path => {
    
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
