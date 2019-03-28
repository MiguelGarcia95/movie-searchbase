import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {getSession, setSession, setToken} from '../../actions/authActions';
import {getAccount, setAccount} from '../../actions/accountActions';

import ContentSlider from '../layout/ContentSlider';

import '../App.css';
import './style/css/Account.css';


class Account extends React.Component {
  state = {
    tryToRedirect: false
  }

  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path)) {
      this.props.getSession(this.getRequestToken(path))
      this.props.setToken(this.getRequestToken(path))
    } else if (localStorage.getItem('account')) {
      this.props.setAccount(JSON.parse(localStorage.getItem('account')))
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
      <section className="account_page">
        {redirectToLogin && <Redirect to='/login'/>}
        {redirectToAccount && <Redirect to='/account'/>}
        {account ? (
          <React.Fragment>
            <section className="account_sidepanel">
              <section className="user_panel">
                <section className="user_avatar"><img src={`https://gravatar.com/avatar/${account.avatar.gravatar.hash}?d=identicon`} alt={`${account.username} avatar`} /></section>
                <section className="user_name"><h1>{account.username}</h1></section>
              </section>
              <section className="content_panel">
                <section className="panel_info">
                  <h2 className="count">0</h2>
                  <h2 className="category">Favorite Movies</h2>
                </section>
              </section>
              <section className="content_panel">
                <section className="panel_info">
                  <h2 className="count">0</h2>
                  <h2 className="category">Favorite Tv Shows</h2>
                </section>
              </section>
              <section className="content_panel">
                <section className="panel_info">
                  <h2 className="count">0</h2>
                  <h2 className="category">Movie Watchlist</h2>
                </section>
              </section>
              <section className="content_panel">
                <section className="panel_info">
                  <h2 className="count">0</h2>
                  <h2 className="category">Show Watchlist</h2>
                </section>
              </section>
            </section>

            <section className="account_content">
              <section className="account_content_section">
                <section className="account_content_name"><h2>Favorite Movies</h2></section>
                <section className="account_content_slide"></section>
              </section>
              <section className="account_content_section">
                <section className="account_content_name"><h2>Favorite Shows</h2></section>
                <section className="account_content_slide"></section>
              </section>
              <section className="account_content_section">
                <section className="account_content_name"><h2>Rated Movies</h2></section>
                <section className="account_content_slide"></section>
              </section>
              <section className="account_content_section">
                <section className="account_content_name"><h2>Rated Shows</h2></section>
                <section className="account_content_slide"></section>
              </section>
            </section>
          </React.Fragment>
        ) : (<Link to='account' className='tryagain'>Try Again</Link>)}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    token_id: state.auth.token_id,
    account: state.account.account
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
