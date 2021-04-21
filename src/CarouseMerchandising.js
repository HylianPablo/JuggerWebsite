import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "./assets/Merchandising.jpg";

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
              <h3 style={{color:"black"}}>Tendencias</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    };

 
export default CarouseWeapons;