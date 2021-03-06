import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Configs({ rows: storedRows, columns: storedColumns, rowsChange, columnsChange }) {
  const [rows, setRows] = useState(storedRows || 28);
  const [columns, setColumns] = useState(storedColumns || 28);

  useEffect(() => {
    console.log(`Alterou o valor das linhas e colunas: ${rows}x${columns}`)
  }, [rows, columns]);

  const generateFile = evt => {
    evt.preventDefault();
    alert('Generate file');
  }

  const handleRowsChange = evt => {
    if (Number(evt.target.value) > 64) {
      return;
    }

    if (evt.target.value.length !== 0) {
      setRows(Number(evt.target.value));
      rowsChange(Number(evt.target.value));
    } else {
      setRows(1);
      rowsChange(1);
    }
  };
  const handleColumnsChange = evt => {
    if (Number(evt.target.value) > 64) {
      return;
    }

    if (evt.target.value.length !== 0) {
      setColumns(Number(evt.target.value));
      columnsChange(Number(evt.target.value));
    } else {
      setColumns(1);
      columnsChange(1);
    }
  };

  return (
    <Board>
      <h1>Please, select number of rows and columns:</h1>
      <label htmlFor="rows">Rows</label>
      <input type="number" name="rows" maxlength="3" min="1" max="64" onChange={handleRowsChange} value={rows} required></input>
      <label htmlFor="columns">columns</label>
      <input type="number" name="columns" maxlength="3" min="1" max="64" onChange={handleColumnsChange} value={columns} required></input>
      <button onClick={generateFile}>Generate css file</button>
    </Board>
  )
}

const Board = styled.div`
  display: inline-block;
  width: 100vw;
  height: 20vh;
  padding: 5vh 30vw 5vh 30vw;
  margin: 0;
  font-family: 'Press Start 2P', cursive;

  > h1 {
    font-size: 12px;
    display: inline-block;
  }

  >label {
    position: absolute;
    transform: translateY(-100%);
    font-size: 14px;
    margin-left: 1vw;
  }

  > input {
    font-family: inherit;
    width: 3vw;
    height: 25px;
    font-size: 14px;
    line-height: 25px;
    margin-left: 1vw;
    text-align: center;
  }
  
  > button {
    font-family: inherit;
    background: linear-gradient(90deg, #ccc 0%, rgba(255,0,121,1) 100%);
    width: 350px;
    height: 30px;
    border: none;
    border-radius: 25px;
    text-align: center;
    margin-left: 20vw;
    margin-top: 20px;
    transform: translateX(-50%);
  }
`;
