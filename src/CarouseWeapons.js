import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import carouselImage1 from "./assets/Armas.jpg";

const CarouseWeapons = () => {
    return (
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Tendencias</h3>
              <p>Equipacion Bushido</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    };

 
export default CarouseWeapons;