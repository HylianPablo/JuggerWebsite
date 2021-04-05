import Table from "react-bootstrap/Table";

const Ranking = () => {
    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Equipo</th>
      <th>Núcleo</th>
      <th>Otro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bushido</td>
      <td>Valladolid</td>
      <td>Azul y blanco</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gulden Draak</td>
      <td>Valladolid</td>
      <td>Dragones</td>
    </tr>
    <tr>
      <td>99999999</td>
      <td>Fauces de Fenrir</td>
      <td>Salamanca</td>
      <td>Lobo chupamela</td>
    </tr>
  </tbody>
</Table>
    );
}

export default Ranking;