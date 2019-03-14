import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Col, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';

import '../App.css';
import {getSession, setSession, getAccount, setAccount, setToken} from '../../actions/authActions';


class Account extends React.Component {
  state = {
    tryToRedirect: false
  }

  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path)) {
      this.props.getSession(this.getRequestToken(path))
      this.props.setToken(this.getRequestToken(path))
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let tryToRedirect = false;
    if (nextProps.session_id && !localStorage.getItem('account') && !nextProps.account) {
      nextProps.getAccount(nextProps.session_id)
    } else if (nextProps.session_id  && localStorage.getItem('account') && !nextProps.account) {
      nextProps.setAccount(JSON.parse(localStorage.getItem('account')))
    }
    
    if (nextProps.session_id) {
      tryToRedirect = true;
    }

    this.setState({tryToRedirect});
  }

  shouldRedirectToLogin = () => {
    let redirect = false;
    if (!this.props.location.search) {
      if (!localStorage.getItem('session_id') && !localStorage.getItem('account')) {
        redirect = true;
      }
    }
    return redirect;
  }

  shouldRedirectToAccount = () => {
    let redirect = false;
    if (this.getApproved(this.props.location.search)) {
      if (this.props.account) {
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
    const {account} = this.props;
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        {redirectToLogin && <Redirect to='/login'/>}
        {redirectToAccount && <Redirect to='/account'/>}
        <Jumbotron fluid style={{paddingTop: '110px', backgroundColor: 'rgba(54,54,54,0.8)'}}>
          <Row style={{margin: '0'}}>
            {account && (
              <React.Fragment>
                <Col xs={{ size: '1', offset: 2 }}>
                  <img className='rounded float-left' style={{width: '100%'}} src={`https://gravatar.com/avatar/${account.avatar.gravatar.hash}?d=identicon`} />
                </Col>
                <Col xs={{ size: '3' }}>
                  <h1 className="display-3">{account.username}</h1>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </Jumbotron>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    token_id: state.auth.token_id,
    account: state.auth.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSession: token => dispatch(getSession(token)),
    setSession: tokenId => dispatch(setSession(tokenId)),
    getAccount: session_id => dispatch(getAccount(session_id)),
    setAccount: account => dispatch(setAccount(account)),
    setToken: token => dispatch(setToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
