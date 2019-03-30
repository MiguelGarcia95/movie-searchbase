import React from 'react';
import {connect} from 'react-redux';
import {addToFavorites, addToWatchlist} from '../../actions/accountActions';
import {getTitle, getPoster, getImage} from '../../utils/functions';
import FavoriteCircle from './FavoriteCircle';
import WatchCircle from './WatchCircle';
import RatingCircle from './RatingCircle';

const displayGenres = (genres) => {
  return genres.map(genre => {
    return <span key={genre.id} className="genre">{genre.name}</span>
  })
}

const DisplayHeader = ({currentMovie, type, addToFavorites, addToWatchlist, account, session_id}) => {
  const imageStyle = {
    backgroundImage: `url(${getImage(currentMovie)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <section className="display_movie_header">
      <section className="display_movie_header_image" style={imageStyle}></section>
      <FavoriteCircle addToFavorites={addToFavorites} type={type} account={account} sessionId={session_id} movie={currentMovie} />
      <WatchCircle addToWatchlist={addToWatchlist} type={type} account={account} sessionId={session_id} movie={currentMovie} />
      <section className="display_movie_header_content">
        <section className="display_movie_header_background">
          <section className="top"></section>
          <section className="bottom"></section>
        </section>
        <section className="display_header_data">
          <section className="display_poster">
            <RatingCircle rating={currentMovie.vote_average} />
            <section className="display_poster_image"><img src={getPoster(currentMovie)} /></section>
          </section>
          <section className="title_meta">
            <h1 className="title">{getTitle(currentMovie, type)}</h1>
            <p className="meta">{displayGenres(currentMovie.genres)}</p>
          </section>
          <section className="display_header_content normal">
            <p className="description">{currentMovie.overview}</p>
          </section>
          <section className="display_header_content mobile mobile_one">
            <p className="description"> {currentMovie.overview.substring(0, 1190)} {currentMovie.overview.length > 1190 && ' ...'}</p>
          </section>
          <section className="display_header_content mobile mobile_two">
            <p className="description"> {currentMovie.overview.substring(0, 700)} {currentMovie.overview.length > 700 && ' ...'}</p>
          </section>
          <section className="display_header_content mobile mobile_three">
            <p className="description"> {currentMovie.overview.substring(0, 480)} {currentMovie.overview.length > 480 && ' ...'}</p>
          </section>
          <section className="display_header_content mobile mobile_four">
            <p className="description"> {currentMovie.overview.substring(0, 470)} {currentMovie.overview.length > 470 && ' ...'}</p>
          </section>
          <section className="display_header_content mobile mobile_five">
            <p className="description"> {currentMovie.overview.substring(0, 350)} {currentMovie.overview.length > 350 && ' ...'}</p>
          </section>
        </section>
      </section>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    account: state.account.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: (accountId, sessionId, mediaType, mediaId, action) => dispatch(addToFavorites(accountId, sessionId, mediaType, mediaId, action)),
    addToWatchlist: (accountId, sessionId, mediaType, mediaId, action) => dispatch(addToWatchlist(accountId, sessionId, mediaType, mediaId, action))
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayHeader);