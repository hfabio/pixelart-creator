import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Configs(props) {
  const [rows, setRows] = useState(props.rows || 28);
  const [columns, setColumns] = useState(props.columns || 28);

  useEffect(() => {
    console.log(`Alterou o valor das linhas e colunas: ${rows}x${columns}`)
  }, [rows, columns]);

  const generateFile = evt => {
    evt.preventDefault();
    alert('Generate file');
  }

  const handleRowsChange = evt => {
    if (evt.target.value.length !== 0) {
      setRows(evt.target.value);
    } else {
      setRows(1);
    }
  };
  const handleColumnsChange = evt => {
    if (evt.target.value.length !== 0) {
      setColumns(evt.target.value);
    } else {
      setColumns(1);
    }
  };

  return (
    <Board>
      <h1>Please, select number of rows and columns:</h1>
      <label htmlFor="rows">Rows</label>
      <input name="rows" maxlength="3" onChange={handleRowsChange} value={rows} required></input>
      <label htmlFor="columns">columns</label>
      <input name="columns" maxlength="3" onChange={handleColumnsChange} value={columns} required></input>
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
    margin-left: 1vw;
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
