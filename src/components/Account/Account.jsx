import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {getSession, setSession, setToken} from '../../actions/authActions';
import {getAccount, setAccount, getFavoriteMovies, getFavoriteShows, getMovieWatchlist, getShowWatchlist} from '../../actions/accountActions';

import ContentSlider from '../layout/ContentSlider';
import UserPanel from './UserPanel';
import SidepanelPanel from './SidepanelPanel';

import '../App.css';
import './style/css/Account.css';


class Account extends React.Component {
  state = {
    fetchedAccountData: false
  }

  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path)) {
      this.props.getSession(this.getRequestToken(path))
      this.props.setToken(this.getRequestToken(path))
    } else if (localStorage.getItem('account')) {
      this.props.setAccount(JSON.parse(localStorage.getItem('account')));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.session_id && !localStorage.getItem('account') && !this.props.account) {
      this.props.getAccount(this.props.session_id)
    } else if (this.props.session_id  && localStorage.getItem('account') && !this.props.account) {
      this.props.setAccount(JSON.parse(localStorage.getItem('account')))
    } else if (!this.state.fetchedAccountData) {
      this.setState({fetchedAccountData: true});
      this.setAccountDetails(this.props.account.id, this.props.session_id);
    }
  }
  
  setAccountDetails = (accountId, sessionId) => {
    this.props.getFavoriteMovies(accountId, sessionId);
    this.props.getFavoriteShows(accountId, sessionId);
    this.props.getMovieWatchlist(accountId, sessionId);
    this.props.getShowWatchlist(accountId, sessionId);
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
    const {favoriteMovies, favoriteMoviesPage, favoriteMoviesTotalPages, favoriteMoviesTotalResults} = this.props;
    const {favoriteShows, favoriteShowsPage, favoriteShowsTotalPages, favoriteShowsTotalResults} = this.props;
    const {movieWatchlist, movieWatchlistPage, movieWatchlistTotalPages, movieWatchlistTotalResults} = this.props;
    const {showWatchlist, showWatchlistPage, showWatchlistTotalPages, showWatchlistTotalResults} = this.props;    

    return (
      <section className="account_page">
        {redirectToLogin && <Redirect to='/login'/>}
        {redirectToAccount && <Redirect to='/account'/>}
        {account ? (
          <React.Fragment>
            <section className="account_sidepanel">
              <UserPanel account={account} />
              <SidepanelPanel count={favoriteMoviesTotalResults} title='Favorite Movies' />
              <SidepanelPanel count={favoriteShowsTotalResults} title='Favorite Tv Shows' />
              <SidepanelPanel count={movieWatchlistTotalResults} title='Movie Watchlist' />
              <SidepanelPanel count={showWatchlistTotalResults} title='Show Watchlist' />
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
    account: state.account.account,
    favoriteMovies: state.account.favoriteMovies,
    favoriteMoviesPage: state.account.favoriteMoviesPage,
    favoriteMoviesTotalPages: state.account.favoriteMoviesTotalPages,
    favoriteMoviesTotalResults: state.account.favoriteMoviesTotalResults,
    favoriteShows: state.account.favoriteShows,
    favoriteShowsPage: state.account.favoriteShowsPage,
    favoriteShowsTotalPages: state.account.favoriteShowsTotalPages,
    favoriteShowsTotalResults: state.account.favoriteShowsTotalResults,
    movieWatchlist: state.account.movieWatchlist,
    movieWatchlistPage: state.account.movieWatchlistPage,
    movieWatchlistTotalPages: state.account.movieWatchlistTotalPages,
    movieWatchlistTotalResults: state.account.movieWatchlistTotalResults,
    showWatchlist: state.account.showWatchlist,
    showWatchlistPage: state.account.showWatchlistPage,
    showWatchlistTotalPages: state.account.showWatchlistTotalPages,
    showWatchlistTotalResults: state.account.showWatchlistTotalResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSession: token => dispatch(getSession(token)),
    setSession: tokenId => dispatch(setSession(tokenId)),
    getAccount: session_id => dispatch(getAccount(session_id)),
    setAccount: account => dispatch(setAccount(account)),
    setToken: token => dispatch(setToken(token)),
    getFavoriteMovies: (accountId, sessionId) => dispatch(getFavoriteMovies(accountId, sessionId)),
    getFavoriteShows: (accountId, sessionId) => dispatch(getFavoriteShows(accountId, sessionId)),
    getMovieWatchlist: (accountId, sessionId) => dispatch(getMovieWatchlist(accountId, sessionId)),
    getShowWatchlist: (accountId, sessionId) => dispatch(getShowWatchlist(accountId, sessionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
