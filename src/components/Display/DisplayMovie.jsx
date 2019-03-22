import React from 'react';
import './style/css/Display.css';

class DisplayMovie extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.movieId);
  }

  render() {
    return (
      <section className="display_movie">
      </section>
    );
  }
}

export default DisplayMovie;
