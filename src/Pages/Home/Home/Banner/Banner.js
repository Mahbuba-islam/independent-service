import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import picture1 from '../../../../images/honey-yanibel-minaya-cruz-TKjCUpweWTo-unsplash.jpg'

import picture2 from '../../../../images/juan-pablo-rodriguez-5ATCbgmN52g-unsplash.jpg'

import picture3 from '../../../../images/nega-YjaTzKCiIx8-unsplash.jpg'



const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={picture1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={picture2}
                    alt="Second slide"
                />
            <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={picture3}
                    alt="Third slide"
                />
            <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
