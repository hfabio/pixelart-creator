import React from 'react'
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

export default function ColorPicker({ color, changeColor, colors, addColor, removeColor, setColorSelected }) {

  const getOppositeColor = rgb => {
    const inside_colors = rgb.split(',').map(element => Number(element.replace(/rgba\(/g, '').replace(/\)/g, '')));
    return `rgba(${255 - inside_colors[0]}, ${255 - inside_colors[1]},${255 - inside_colors[2]},${(1 - inside_colors[3] !== 0) ? 1 - inside_colors[3] : 1})`;
  }

  const handleSelectColor = color => setColorSelected(color);

  return (
    <Container>
      <h1>Add your colours:</h1>
      <SketchPicker
        color={color || '#fff'}
        onChangeComplete={changeColor}
      />
      <button onClick={addColor}>Add color</button>
      <h1>Your color palette:</h1>
      <ul>
        {
          colors.map((element, index) =>
            <li
              key={index}
              title="Click me to set the colour to paint"
              style={{ backgroundColor: element, color: getOppositeColor(element) }}
              onClick={() => handleSelectColor(element)}
            >Color {index + 1} - ( {element} )
            <button
                key={index}
                color={element}
                style={{ marginLeft: '50%', color: getOppositeColor(element), borderColor: `1px linear ${getOppositeColor(element)}` }}
                onClick={() => removeColor(element)}
              >(Remove Color)</button>
            </li>)
        }
      </ul>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0;
  background: rgb(2,0,36);
  background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(255,0,121,1) 100%);
  height: 70vh;
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2vh 0;

  > h1 {
    color: #fff;
    font-family: 'Press Start 2P', cursive;
  }
  > button {
    font-family: 'Press Start 2P', cursive;
    font-size: 14px;
    color: #fff;
    background: rgb(2,0,36);
    background: linear-gradient(90deg,rgba(255,0,121,1)  0%, rgba(2,0,36,1) 100%);
    width: 180px;
    height: 40px;
    border-radius: 30px;
  }

  > ul {
    list-style: none;
    width: 100%;
    height: 30%;
    overflow: hidden;
    overflow-y: scroll;
  }

  > ul > li {
    position: relative;
    width: 100%;
    line-height: 20px;
    padding: 0px 20px;
  }

  >ul > li > button {
    position: absolute;
    right: 20px;
    width: 150px;
    border-radius: 15px;
  }

  > ul > li, > ul > li > button {
    display: inline-block;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    height: 20px;
    cursor: pointer;
  }
`;