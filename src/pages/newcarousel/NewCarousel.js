import React from 'react';
import { Carousel } from 'react-bootstrap';
import caro1 from '../Image/caro-1.jpg'
import caro2 from '../Image/caro-2.jpg'
import caro3 from '../Image/caro-3.jpg'

const NewCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="order-10 d-block w-100"
                        src={caro1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="order-11 d-block w-100"
                        src={caro2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" order-12 d-block w-100"
                        src={caro3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default NewCarousel;