import Table from "react-bootstrap/Table";
import { useState} from 'react';

const MasterRanking = () => {
    const M=30;
  
    const [masterRanking, setMasterRanking] = useState ([
      { post: 1, tName: 'Bushido', core: 'Valladolid', mPoints: 1000, points: 1000000 },
      { post: 2, tName: 'Gulden', core: 'Valladolid', mPoints: 500, points: 200000 },
      { post: 3, tName: 'Lotentencia', core: 'Valladolid', mPoints: 500, points: 50000 },
      { post: 4, tName: 'LOT', core: 'Valladolid', mPoints: 0, points: 4000 },
      { post: 5, tName: 'Sentencia', core: 'Valladolid', mPoints: 0, points: 100 },
      { post: 6, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000 }
    ]);
  
  
      return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Núcleo</th>
            <th>Puntos Master</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {masterRanking.map((rank) => (
            <tr key={rank.post}>
              <td>{rank.post}</td>
              <td>{rank.tName}</td>
              <td>{rank.core}</td>
              <td>{rank.mPoints}</td>
              <td>{rank.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      );
  }
  
  export default MasterRanking;