import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import TeamRegistration from "./TeamRegistration";

const ActiveTournamentDesc = ({ info }) => {
  return (
    <div className="wholeDescription">
      <h1>{info.title}</h1>
      <br></br>
      <p>{info.body}</p>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Ubicación</th>
            <td>{info.location}</td>
          </tr>
          <tr>
            <th>Fecha</th>
            <td>{info.date}</td>
          </tr>
          <tr>
            <th>Modelo</th>
            <td>{info.model}</td>
          </tr>
        </tbody>
      </Table>
      <br></br>
          <Button variant="primary" size="lg" block href="/torneos/inscripcion">
            Inscríbe a tu equipo
          </Button>
    </div>
  );
};

export default ActiveTournamentDesc;
