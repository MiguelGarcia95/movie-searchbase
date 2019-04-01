import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {getSession, setSession, setToken} from '../../actions/authActions';
import {getAccount, setAccount, getFavoriteMovies, getFavoriteShows, getMovieWatchlist, getShowWatchlist, removeFromFavorites, deleteMessage} from '../../actions/accountActions';
import {fetchMovieGenres} from '../../actions/movieActions';
import {fetchShowGenres} from '../../actions/tvShowActions';

import UserPanel from './UserPanel';
import SidepanelPanel from './SidepanelPanel';
import AccountSlider from './AccountSlider';

import '../App.css';
import './style/css/Account.css';


class Account extends React.Component {
  state = {
    fetchedAccountData: false,
    displayMessage: false
  }


  componentDidMount() {
    const path = this.props.location.search;
    if (this.getApproved(path)) {
      this.props.getSession(this.getRequestToken(path))
      this.props.setToken(this.getRequestToken(path))
    } else if (localStorage.getItem('account')) {
      this.props.setAccount(JSON.parse(localStorage.getItem('account')));
    }
    this.props.fetchMovieGenres();
    this.props.fetchShowGenres();
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

    if (this.props.message !== prevProps.message && this.props.message) {
      this.setState({displayMessage: true});
      setTimeout( () => {
        this.setState({displayMessage: false})
        this.props.deleteMessage();
      }, 5000);
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
    const {displayMessage} = this.state;
    const {account, showGenres, movieGenres, removeFromFavorites, session_id, message} = this.props;
    const {favoriteMovies, favoriteMoviesTotalResults} = this.props;
    const {favoriteShows, favoriteShowsTotalResults} = this.props;
    const {movieWatchlist, movieWatchlistTotalResults} = this.props;
    const {showWatchlist, showWatchlistTotalResults} = this.props;    

    return (
      <React.Fragment>
        <section className={`message_popup ${displayMessage ? 'active' : ''}`}>
          {message && <h2 className="message">{message}</h2> }
        </section>
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
                <AccountSlider 
                  sliderName='Favorite Movies' 
                  movies={favoriteMovies} 
                  totalResults={favoriteMovies.length}
                  type='movies'
                  sliderType='Favorite'
                  genres={movieGenres}
                  removeFromFavorites={removeFromFavorites}
                  sessionId={session_id}
                  accountId={account.id}
                />
                <AccountSlider 
                  sliderName='Favorite Tv Shows' 
                  movies={favoriteShows} 
                  totalResults={favoriteShows.length} 
                  type='shows'
                  genres={showGenres}
                  sliderType='Favorite'
                  removeFromFavorites={removeFromFavorites}
                  sessionId={session_id}
                  accountId={account.id}
                />
                <AccountSlider 
                  sliderName='Movie Watchlist' 
                  movies={movieWatchlist}
                  totalResults={movieWatchlistTotalResults}
                  type='movies'
                  genres={movieGenres}
                  sliderType='Watchlist'
                  removeFromFavorites={removeFromFavorites}
                  sessionId={session_id}
                  accountId={account.id}
                />
                <AccountSlider 
                  sliderName='Show Watchlist' 
                  movies={showWatchlist} 
                  totalResults={showWatchlistTotalResults} 
                  type='shows'
                  genres={showGenres}
                  sliderType='Watchlist'
                  removeFromFavorites={removeFromFavorites}
                  sessionId={session_id}
                  accountId={account.id}
                />
              </section>

            </React.Fragment>
          ) : (<Link to='account' className='tryagain'>Try Again</Link>)}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    token_id: state.auth.token_id,
    account: state.account.account,
    favoriteMovies: state.account.favoriteMovies,
    favoriteMoviesTotalResults: state.account.favoriteMoviesTotalResults,
    favoriteShows: state.account.favoriteShows,
    favoriteShowsTotalResults: state.account.favoriteShowsTotalResults,
    movieWatchlist: state.account.movieWatchlist,
    movieWatchlistTotalResults: state.account.movieWatchlistTotalResults,
    showWatchlist: state.account.showWatchlist,
    showWatchlistTotalResults: state.account.showWatchlistTotalResults,
    movieGenres: state.movies.movieGenres,
    showGenres: state.shows.showGenres,
    message: state.account.message
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
    getShowWatchlist: (accountId, sessionId) => dispatch(getShowWatchlist(accountId, sessionId)),
    removeFromFavorites: (accountId, sessionId, mediaType, mediaId, action) => dispatch(removeFromFavorites(accountId, sessionId, mediaType, mediaId, action)),
    fetchMovieGenres: () => dispatch(fetchMovieGenres()),
    fetchShowGenres: () => dispatch(fetchShowGenres()),
    deleteMessage: () => dispatch(deleteMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
