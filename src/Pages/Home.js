import React, { Component } from 'react'
import Slider from "react-slick";
import '../css/card.css'

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';

class Home extends Component{
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
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };
        return(
            <>
            <div className="home_container">home</div>
            <div className="video_container">

                <div className="video_inner_container">
      
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/mDIVpJgjoXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className=" home_container_card container-fluid">
                <div className="card_container_wrap">
                    <div className="row">
                        <div className="col-xl-4">
                        <div className="card">
          <img src={image1} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
       

                        </div>
                        <div className="col-xl-4">
                        <div className="card">
          <img src={image2} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>

                        </div>
                        <div className="col-xl-4">
                        <div className="card">
          <img src={image3} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>

                        </div>
                    </div>
    

                </div>
            </div>
            <div className="home_container">Details</div>
            <div className=" home_container_product container-fluid">
            <div className="row product_card">
                        <div className="col-xl-4">
                        <div className="card_product_detail">
          <img src={image3} />
       
        </div>
       

                        </div>
                        <div className="col-xl-4">
                        <div className="card_product_detail">
          <img src={image3} />
       
        </div>

                        </div>
                        <div className="col-xl-4">
                        <div className="card_product_detail">
          <img src={image3} />
        
        </div>

                        </div>
                    </div>
    

 
            <div className="text-center transformation">
        
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="card_product ">
          <img src={image3} />
          </div>
          <div className="card_product">
          <img src={image3} />
          </div>
          <div className="card_product">
          <img src={image3} />
          </div>
          <div className="card_product">
          <img src={image3} />
          </div>
          <div className="card_product">
          <img src={image3} />
          </div>
          <div className="card_product">
          <img src={image3} />
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          {/* <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button> */}
        </div>
      </div>
            </div>
            <div className=" home_container_footer container-fluid">
              <div className="row footer">
                <div className="col-xl-4 border_right">
                  <h1>About Envicare</h1>
                  <br />
                  <p>
                  We are Ahmedabad, Gujarat - India based manufacturer of composting machines and equipments, we have different types of composting machines with different range of capacity. We are Envicare !!! – Organic waste management & Environmental Solutions Company.
                  </p>
                </div>
                <div className="col-xl-4 border_right">
                <h1>Product Range</h1>
                  <br />
                  <p>
                  We are Ahmedabad, Gujarat - India based manufacturer of composting machines and equipments, we have different types of composting machines with different range of capacity. We are Envicare !!! – Organic waste management & Environmental Solutions Company.
                  </p>
                </div>
                <div className="col-xl-4">
                <h1>Contact Us</h1>
                  <br />
                  <p>
                  We are Ahmedabad, Gujarat - India based manufacturer of composting machines and equipments, we have different types of composting machines with different range of capacity. We are Envicare !!! – Organic waste management & Environmental Solutions Company.
                  </p>
                </div>
              </div>
            </div>

            </>
       
        )
    }
}
export default Home;