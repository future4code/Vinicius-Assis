import React from 'react';
import styled from "styled-components"
const Cabecalho = styled.header`
background-color:;
grid-row: 1/1;
`


function Header(props) {
    return (
      <Cabecalho>
       <button onClick={props.a}>Matchs</button>
      </Cabecalho>
    );
  }
  
  export default Header;