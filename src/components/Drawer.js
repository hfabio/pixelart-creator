import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

export default function Drawer({ rows: storedRows, columns: storedColumns }) {

  const [rows, setRows] = useState(storedRows || 32);
  const [columns, setColumns] = useState(storedColumns || 32);

  useEffect(() => {
    setRows(storedRows);
    setColumns(storedColumns);
  }, [storedRows, storedColumns]);

  useEffect(() => {
    redrawPaper();
    // eslint-disable-next-line
  }, [rows, columns])

  const redrawPaper = () => {
    console.table(`Rows: ${rows}`, `Columns: ${columns}`);
  }

  return (
    <Screen>
      <Paper rows={rows} columns={columns}>
        {Array(rows).fill(
          Array(columns).fill(<td></td>)
        ).map(element => <tr>{element}</tr>)}
      </Paper>
    </Screen>
  )

}
const Screen = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Paper = styled.table`
background-color: #fff;
width: 60vh;
height: 60vh;

>tr {
  margin: 0;
  padding: 0;
}

> tr > td {
  width: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  height: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  border: 1px solid black;
  margin: 0;
  padding: 0;
}
`;