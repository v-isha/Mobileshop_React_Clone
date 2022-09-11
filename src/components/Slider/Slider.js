import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Slider = () => {
  return (
                    <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg"
                        alt="First slide"
                      />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"
                        alt="Second slide"
                      />

                     
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg"
                        alt="Third slide"
                      />

                      
                    </Carousel.Item>
                  </Carousel>
        )
}

export default Slider



