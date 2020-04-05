import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ColorPicker from './ColorPicker';

export default function Drawer({ rows: storedRows, columns: storedColumns }) {

  const [rows, setRows] = useState(storedRows || 32);
  const [columns, setColumns] = useState(storedColumns || 32);
  const [color, setColor] = useState('rgba(255, 255, 255, 1)');
  const [colors, setColors] = useState(['rgba(255, 255, 255, 1)']);
  const [selectedColor, setSelectedColor] = useState('rgba(255, 255, 255, 1)');

  useEffect(() => {
    setRows(storedRows);
    setColumns(storedColumns);
  }, [storedRows, storedColumns]);

  useEffect(() => {
    console.log(`color selected to draw: ${selectedColor}`);
  }, [selectedColor]);

  const handleChangeColor = ({ rgb }) => setColor(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`);

  const addColor = () => {
    if (!colors.find(element => element === color)) {
      setColors([...colors, color]);
    } else {
      alert('Sorry, this color is already in your palette');
    }
    setSelectedColor(color);
  }
  const removeColor = color => setColors(colors.filter(element => element !== color));


  const paintMe = evt => {
    evt.preventDefault();
    evt.target.style.backgroundColor = selectedColor;
    evt.target.style.border = '1px solid rgba(0,0,0,0.2)';
    evt.target.setAttribute('data-class', `pixel-color-${colors.findIndex(element => element === selectedColor)}`);
  }
  const clearMe = evt => {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'rgba(255,255,255,0)';
    evt.target.style.border = '1px solid rgba(0,0,0,1)';
    evt.target.setAttribute('data-class', `invisible`);
  }

  const overMe = evt => {
    if (evt.buttons === 1) {
      //painting
      paintMe(evt);
    } else if (evt.buttons === 2) {
      // erasing
      clearMe(evt);
    }
  }

  const getValues = () => {
    return Array.from(document.querySelectorAll('table tr')).map(element => Array.from(element.children)).map(el => el.map(element => element.attributes['data-class'].value));
  }

  return (
    <Screen>
      <div>
        <h1>Selected color: <SelectedColorSquare selectedColor={selectedColor} rows={rows} columns={columns} /></h1>
        <Paper rows={rows} columns={columns} backgroundColor={color}>
          {Array(rows).fill(
            Array(columns).fill(<td style={{ backgroundColor: 'rgba(255, 255, 255, 0)', border: '1px solid rgba(0,0,0,1)' }} data-class="invisible" onMouseDown={(evt) => paintMe(evt)} onContextMenuCapture={(evt) => clearMe(evt)} onMouseOver={(evt) => overMe(evt)}></td>)
          ).map(element => <tr>{element}</tr>)}
        </Paper>
      </div>
      <ColorPicker
        color={color}
        changeColor={handleChangeColor}
        colors={colors}
        addColor={addColor}
        removeColor={removeColor}
        setColorSelected={setSelectedColor}
      />
    </Screen>
  )

}
const Screen = styled.div`
  width: 100vw;
  height: 70vh;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;

  > div > h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Paper = styled.table`
background-color: #fff;
margin: 0;
padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;


>tr {
  margin: 0;
  padding: 0;  
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

> tr > td {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  height: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  margin: 0;
  padding: 0;
  border: 1px solid #000;
    /* -webkit-box-shadow:inset 0px 0px 0px 1px #000;
    -moz-box-shadow:inset 0px 0px 0px 1px #000;
    box-shadow:inset 0px 0px 0px 1px #000; */
}
`;

const SelectedColorSquare = styled.div`
  display: inline-block;
  width: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  height: calc(60vh / ${props => Math.max(...[props.rows, props.columns])});
  background-color: ${props => props.selectedColor || '#fff'};
  transform: translateY(25%);
  border: 1px solid black;
`;