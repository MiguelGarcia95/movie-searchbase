import React from "react";
import Slider from "react-slick";
// import Slide from './Slide';

// const displayCast = (cast) => {
//   return movies.map(movie => {
//     return <Slide key={movie.id} movie={movie} type={type} genres={genres} />
//   })
// }

const displayCast = cast => {
  return cast.slice(0, 8).map(character => {
    const imageStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${character.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <section className="cast_character" key={character.cast_id}>
        <section className="cast_image" style={imageStyle}></section>
        <section className="cast_data">
          <p className="name" >{character.name}</p>
        </section>
      </section>
    )
  })
}

const CastSlider = ({cast, settings}) => {
  return (
    <div>
      <Slider {...settings}>
        {displayCast(cast)}
      </Slider>
    </div>
  );
}

export default CastSlider;