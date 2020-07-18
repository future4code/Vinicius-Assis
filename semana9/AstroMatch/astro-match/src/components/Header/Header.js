import React from 'react';
import styled from "styled-components"

const Cabecalho = styled.header`
background-color:;
grid-column: 1/4;
grid-row: 1/1;
display: flex;
justify-content: center;
align-items: center;
`
const H2 = styled.h1`
display: inline;
background: -webkit-linear-gradient(#00ced1, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const H22 = styled.h1`
display: inline;
background: -webkit-linear-gradient(red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Button = styled.div`
grid-column: 4/4;
display: flex;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 100%;
background: -webkit-linear-gradient(#9b111e, black, #9b111e);
`
const P = styled.p`
display: flex;
align-items: center;
color: white;
font-weight: bold;
`


function Header(props) {
    return (
      <Cabecalho>
        <H2>astro</H2>
        <H22>match</H22>
      </Cabecalho>
    );
  }
  
  export default Header;