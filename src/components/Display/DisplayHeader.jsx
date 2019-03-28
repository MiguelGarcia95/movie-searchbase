import React from 'react';
import {getTitle, getPoster, getImage} from '../../utils/functions';

const displayGenres = (genres) => {
  return genres.map(genre => {
    return <span key={genre.id} className="genre">{genre.name}</span>
  })
}

const DisplayHeader = ({currentMovie, type}) => {
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
      <section className="display_movie_header_content">
        <section className="display_movie_header_background">
          <section className="top"></section>
          <section className="bottom"></section>
        </section>
        <section className="display_header_data">
          <section className="display_poster">
            <section className="display_poster_image"><img src={getPoster(currentMovie)} /></section>
          </section>
          <section className="title_meta">
            <h1 className="title">{getTitle(currentMovie, type)}</h1>
            <p className="meta">{displayGenres(currentMovie.genres)}</p>
          </section>
          <section className="display_header_content">
            <p className="description">{currentMovie.overview}</p>
          </section>
          <section className="display_header_content mobile">
          {/* mobile class will show only when mobile */}
            {/* <p className="description">{currentMovie.overview.substring(0, 1500)}</p> */}
          </section>
        </section>
      </section>
    </section>
  )
}

export default DisplayHeader;