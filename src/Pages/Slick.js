


import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';



class Slick extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
      render() {
        const settings = {
          dots: true,
          
          speed: 2000,
          swipeToSlide: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000
        };
        return (
          <div>

        
            <Slider ref={slider => (this.slider = slider)} {...settings} className="slick_slider">
              <div >
              <img
          className="d-block w-100 image1"
          src={image1}
          alt="First slide"
        />
              </div>
              <div>
              <img
          className="d-block w-100 image1"
          src={image2}
          alt="First slide"
        />
              </div>
              <div>
              <img
          className="d-block w-100 image1"
          src={image3}
          alt="First slide"
        />
        
              </div>
              {/* <div>
              <img
          className="d-block w-100 image1"
          src={image4}
          alt="First slide"
        />
        
              </div> */}
            
             
             
            </Slider>
            {/* <div style={{ textAlign: "center" }}>
              <button className="button" onClick={this.play}>
                Play
              </button>
              <button className="button btn btn-success" onClick={this.pause}>
                Pause
              </button>
            </div> */}
          </div>
      
      );
      }
  
}

    
export default Slick;