import React from "react";
import Slider from "react-slick";



class ContentSlider extends React.Component {
  render() {
    const settings = {
      rtl: true,
      infinite: true,
      slidesToShow: 8,
      autoplay: true,
      arrows: false,
      speed: 500
    };

    return (
      <div style={{padding: '100px 0'}}>
        <h4 style={{marginBottom: '25px'}}> Multiple items </h4>
        <Slider {...settings}>
          <div>
            <h3 style={{textAlign: 'center'}}>1</h3>
            <h3 style={{textAlign: 'center'}}>1</h3>
            <h3 style={{textAlign: 'center'}}>1</h3>
            <h3 style={{textAlign: 'center'}}>1</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>2</h3>
            <h3 style={{textAlign: 'center'}}>2</h3>
            <h3 style={{textAlign: 'center'}}>2</h3>
            <h3 style={{textAlign: 'center'}}>2</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>3</h3>
            <h3 style={{textAlign: 'center'}}>3</h3>
            <h3 style={{textAlign: 'center'}}>3</h3>
            <h3 style={{textAlign: 'center'}}>3</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>4</h3>
            <h3 style={{textAlign: 'center'}}>4</h3>
            <h3 style={{textAlign: 'center'}}>4</h3>
            <h3 style={{textAlign: 'center'}}>4</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>5</h3>
            <h3 style={{textAlign: 'center'}}>5</h3>
            <h3 style={{textAlign: 'center'}}>5</h3>
            <h3 style={{textAlign: 'center'}}>5</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>6</h3>
            <h3 style={{textAlign: 'center'}}>6</h3>
            <h3 style={{textAlign: 'center'}}>6</h3>
            <h3 style={{textAlign: 'center'}}>6</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>7</h3>
            <h3 style={{textAlign: 'center'}}>7</h3>
            <h3 style={{textAlign: 'center'}}>7</h3>
            <h3 style={{textAlign: 'center'}}>7</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>8</h3>
            <h3 style={{textAlign: 'center'}}>8</h3>
            <h3 style={{textAlign: 'center'}}>8</h3>
            <h3 style={{textAlign: 'center'}}>8</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>9</h3>
            <h3 style={{textAlign: 'center'}}>9</h3>
            <h3 style={{textAlign: 'center'}}>9</h3>
            <h3 style={{textAlign: 'center'}}>9</h3>
          </div>
          <div >
            <h3 style={{textAlign: 'center'}}>10</h3>
            <h3 style={{textAlign: 'center'}}>10</h3>
            <h3 style={{textAlign: 'center'}}>10</h3>
            <h3 style={{textAlign: 'center'}}>10</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ContentSlider;