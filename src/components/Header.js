import React from 'react';
import styled from 'styled-components';

export default function Header() {


  const handleClick = evt => {
    const element = evt.target;
    evt.preventDefault();
    alert(`Clicou em ${element.textContent}`);
  }

  return (
    <Nav>
      <a onClick={handleClick}>Home</a>
      <a onClick={handleClick}>How to use</a>
      <a onClick={handleClick}>Get code</a>
      <a onClick={handleClick}>Reset</a>
    </Nav>
  )
}


const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  height: 5vh;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,121,1) 100%);

  a {
    text-decoration: none;
    font-size: 24px;
    line-height: 5vh;
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    color: #fff;
  }
`;