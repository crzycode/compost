import React, {Component} from 'react';
import { Carousel} from 'react-bootstrap'


 import image1 from '../assets/images/1.jpg';
 import image2 from '../assets/images/2.jpg';
 import image3 from '../assets/images/3.jpg';


  
class Slider extends Component{

  render(){
    return(
      <Carousel slide={true} pause={true}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 image1"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    )
  }
}
    
export default Slider;