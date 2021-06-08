import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const TeamMembers = () => {
  return (
    <div>
      <Card className=" buttonFont cardTextSize membersColor" border="success" style={{height: '3.5rem'}}>
        Miembros del equipo
      </Card>
      <Table striped bordered hover size="sm" variant="success">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apodo</th>
            <th>Posición</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hugo Prieto Tárrega</td>
            <td>Kuma</td>
            <td>Kette</td>
          </tr>
          <tr>
            <td>Miguel Rasero Martín</td>
            <td>Katip</td>
            <td>Pomfer</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default TeamMembers;
