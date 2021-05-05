import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`

  background: #FAFAFA;


  
  width: 800px;
  margin: 60px auto;
  font-family: sans-serif;
  color: #213B4C;
  
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
 
  
  table {
    width: 100%;
    border-spacing: 0 0;
    background: #213B4C;
    color: white;
    box-shadow: 0 0 20px #1E3344;
    border-radius: 20px;
    overflow: hidden;
    
    
    th {
      background: #0C1E28;
      border: none;  
      margin: 0;
      padding: 0;
      text-align: left;
      padding: 20px 0px 20px 0px;
      
      
      &:first-of-type{
        padding: 0 30px 0 30px;
        text-align: center;
      }
      &:last-of-type{
        padding: 0 30px 0 30px;
      }
      
      &:nth-child(3), &:nth-child(4){
        text-align: center;
        cursor: pointer;
      }
    }
    
    tr {
      &:nth-child(2n+1) {
        background: #1E3344;
      }
      
      td {

        padding: 10px 0px;
        
        &:nth-child(1){
           padding: 10px 30px 10px 30px;
          text-align: center;
        }
        
        &:nth-child(3),&:nth-child(4){
          text-align: center;
        }
      }
      
      &:hover {
         background: #18A5FE;
      }
    }
  }
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
}

.none {
  visible: hidden;
  opacity: 0;
}


`



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

 function TableRanking(){
  
    const data =  ([
      { post: 1, tName: 'Bushido', core: 'Valladolid', mPoints: 1000, points: 1000000, spring:1000, sumer:1000, winter:1000 },
      { post: 2, tName: 'Gulden', core: 'Valladolid', mPoints: 500, points: 200000, spring:1000, sumer:1000, winter:1000 },
      { post: 3, tName: 'Lotentencia', core: 'Valladolid', mPoints: 500, points: 50000, spring:1000, sumer:1000, winter:1000 },
      { post: 4, tName: 'LOT', core: 'Valladolid', mPoints: 0, points: 4000, spring:1000, sumer:1000, winter:1000 },
      { post: 5, tName: 'Sentencia', core: 'Valladolid', mPoints: 0, points: 100, spring:1000, sumer:1000, winter:1000 },
      { post: 6, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:null, sumer:1000, winter:null },
      { post: 7, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:1000 },
      { post: 8, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:null },
      { post: 9, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:null, sumer:1000, winter:1000 },
      { post: 10, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:1000 },
      { post: 11, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:1000 },
      { post: 12, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:null },
      { post: 13, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:null, sumer:1000, winter:null },
      { post: 14, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:1000, sumer:null, winter:null },
      { post: 15, tName: 'Fauces de Fenrrir', core: 'Salamanca', mPoints: 0, points: -1000000, spring:null, sumer:null, winter:null }
    ]);
  
    const columns1 = React.useMemo(
      () => [{
      Header: 'Informacion del equipo',
      columns: [
        {
          Header: '#',
          id: 'post',
          accessor: 'post', // String-based value accessors!
          
        }, {
          Header: 'Nombre del Equipo',
          accessor: 'tName',
        }, {
          
          Header: 'Nucleo',
          accessor: 'core',
        }, {
          Header: 'Master Points',
          accessor: 'mPoints',
        },{
          Header: 'Points',
          accessor: 'points'
        },
      ],
    },
    {
      Header: 'Torneos',
        columns: [
          {
            Header: 'SpringCup 2020',
            accessor: 'spring'
          },{
            Header: 'SummerCup 2020',
            accessor: 'sumer'
          },{
            Header: 'WinterCup 2020',
            accessor: 'winter'
          }
        ],
      },
    ],
    )
    
      return(
        <Styles>
          <Table columns={columns1} data={data} 
            style={{ marginLeft: "6.0rem", marginRight:"6.0rem", paddinDown: "0" }}
            defaultPageSize={1000}
            minRows={0}
          />
        </Styles>
      );
      }

  
  export default TableRanking;