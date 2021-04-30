import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "./assets/BushidoShirt.jpg";
import carouselImage2 from "./assets/LOTShirt.jpg";
import carouselImage3 from "./assets/GuldenShirt.jpg";


const CarouseShopShirts= () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Tendencias</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Tendencias</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Tendencias</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouseShopShirts;
