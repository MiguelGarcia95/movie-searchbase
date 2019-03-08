import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container} from 'reactstrap';
import {Redirect} from 'react-router-dom';

import './App.css';
import {getSession, setSession, getAccount, setAccount} from '../actions/authActions';


class Account extends React.Component {
  state = {
    tryToRedirect: false
  }
  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path) && this.getApproved() !== null) {
      this.props.getSession(this.getRequestToken(path))
    } 
    this.setState({tryToRedirect: true});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.session_id && !localStorage.getItem('account')) {
      nextProps.getAccount(nextProps.session_id)
    } else if (nextProps.session_id  && localStorage.getItem('account')) {
      nextProps.setAccount(JSON.parse(localStorage.getItem('account')))
    }
  }

  shouldRedirect = (type) => {
    let redirect = false;
    if (this.getApproved(this.props.location.search) && this.state.tryToRedirect) {
      if (!localStorage.getItem('account') && !localStorage.getItem('session_id')) {
        if (type === 'account') {
          redirect = true;
        } 
      }
    } else if (this.state.tryToRedirect && type === 'login') {
      if (!localStorage.getItem('account') && !localStorage.getItem('session_id')) {
        if (type === 'login') {
          redirect = true;
        } 
      }
    }
    return redirect;
  }

  shouldRedirectToLogin = () => {
    return this.shouldRedirect('login');
  }

  shouldRedirectToAccount = () => {
    return this.shouldRedirect('account');
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
    const redirectToLogin = this.shouldRedirectToLogin();
    const redirectToAccount = this.shouldRedirectToAccount();
    console.log('redirectToLogin', redirectToLogin);
    console.log('redirectToAccount', redirectToAccount);
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        {/* {redirectToLogin && <Redirect to='/login'/>} */}
        {redirectToAccount && <Redirect to='/account'/>}
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
    getAccount: session_id => dispatch(getAccount(session_id)),
    setAccount: account => dispatch(setAccount(account))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
