import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Bg from '../../image/bg--11.jpg';
const Banner = () => {
    return (
        <div>
      <div
        style={{
          background: `url(${Bg})`,
          width:"300px",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center center",
          width:"100%",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5 ">
                <h1 className="text-light pt-5">START IMAGINING YOUR JOURNEY</h1>
                <p className="my-4 text-white fs-5">
                When the world starts to move again, find your dream destination here
                </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
    );

};

export default Banner;