import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container} from 'reactstrap';

import './App.css';
import {getSession, setSession, getAccount} from '../actions/authActions';


class Account extends React.Component {
  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path) && this.getApproved !== null) {
      this.props.getSession(this.getRequestToken(path))
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(JSON.parse(localStorage.getItem('account')))
    if (nextProps.session_id) {
      nextProps.getAccount(nextProps.session_id)
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
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        <Jumbotron fluid style={{paddingTop: '110px', backgroundColor: '#444', color: 'white'}}>
          <Container fluid style={{textAlign:'center'}}>
            <h1 className="display-3">Account</h1>
            {/* <p className="lead">It'll redirect you to The MovieDB</p> */}
          </Container>
        </Jumbotron>
      </section>
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
    setSession: session_id => dispatch(setSession(session_id)),
    getAccount: session_id => dispatch(getAccount(session_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
