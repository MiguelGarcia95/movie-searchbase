import React from 'react';

class DisplayPeople extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.peopleId);
  }

  render() {
    return (
      <section className="display_people"></section>
    )
  }
}

export default DisplayPeople;