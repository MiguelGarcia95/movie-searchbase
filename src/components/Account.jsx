import React from 'react';

import './App.css';

class Account extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search)
    console.log(this.props.match.params.status)
    // console.log(this.props.location.query.__request_token)
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
