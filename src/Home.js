import CarouselJ from "./CarouselJ";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="main">
      <CarouselJ />
      <br></br>
      <Card>
        <Card.Body>El Jugger consiste en saber no elegir el Q-Tip como arma.</Card.Body>
      </Card>
    </div>
  );
};

export default Home;
