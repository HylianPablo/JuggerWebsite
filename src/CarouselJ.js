import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import carouselImage1 from "./assets/carousel1.jpg";
import carouselImage2 from "./assets/carousel2.jpg";
import carouselImage3 from "./assets/carousel3.jpg";

const CarouselJ = () => {
  return (
    <Carousel className="carousell">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ven a Jugger</h3>
          <p>Texto de ejemplo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ven a Jugger</h3>
          <p>Texto de ejemplo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ven a Jugger</h3>
          <p>
            Texto de ejemplo
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselJ;
