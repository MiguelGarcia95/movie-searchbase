import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container} from 'reactstrap';
import {Redirect} from 'react-router-dom';

import './App.css';
import {getSession, setSession, getAccount, setAccount, setToken, getToken} from '../actions/authActions';


class Account extends React.Component {
  state = {
    tryToRedirect: false,
    accountReached: false
  }

  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path) && this.getApproved() !== null) {
      this.props.getSession(this.getRequestToken(path))
      this.props.setToken(this.getRequestToken(path))
    } else {
      this.props.getToken();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let accountReached = false;
    let tryToRedirect = false;
    if (nextProps.session_id && !localStorage.getItem('account')) {
      nextProps.getAccount(nextProps.session_id)
      accountReached = true;
    } else if (nextProps.session_id  && localStorage.getItem('account')) {
      nextProps.setAccount(JSON.parse(localStorage.getItem('account')))
      accountReached = true;
    }
    if (nextProps.session_id) {
      tryToRedirect = true;
    }

    this.setState({tryToRedirect, accountReached});
  }
  
  shouldRedirectToLogin = () => {
    // console.log('in', this.state.accountReached);
    // console.log('inn', this.state.tryToRedirect);
    // console.log('innn ', (!localStorage.getItem('session_id') && !localStorage.getItem('account')))
    let redirect = false;
    if (this.state.tryToRedirect) {
      if (!localStorage.getItem('session_id') && !localStorage.getItem('account')) {
        redirect = true;
      }
    }
    return redirect;
  }

  shouldRedirectToAccount = () => {
    let redirect = false;
    if (this.getApproved(this.props.location.search) && this.state.tryToRedirect && this.state.accountReached) {
      if (localStorage.getItem('account')) {
        redirect = true;
      }
    }
    return redirect;
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
    const redirectToAccount = this.shouldRedirectToAccount();
    const redirectToLogin = this.shouldRedirectToLogin();
    console.log('redirectToLogin', redirectToLogin);
    console.log('redirectToAccount', redirectToAccount);
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        {/* {redirectToLogin && <Redirect to='/login'/>} */}
        {/* {redirectToAccount && <Redirect to='/account'/>} */}
        <Jumbotron fluid style={{paddingTop: '110px', backgroundColor: '#444', color: 'white'}}>
          <Container fluid style={{textAlign:'center'}}>
            <h1 className="display-3">Account</h1>
          </Container>
        </Jumbotron>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    token_id: state.auth.token_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSession: token => dispatch(getSession(token)),
    setSession: session_id => dispatch(setSession(session_id)),
    getAccount: session_id => dispatch(getAccount(session_id)),
    setAccount: account => dispatch(setAccount(account)),
    setToken: token => dispatch(setToken(token)),
    getToken: () => dispatch(getToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
