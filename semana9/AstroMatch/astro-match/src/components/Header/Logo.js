import React from 'react';
import styled from "styled-components"

const Button = styled.button`
grid-column: 3/4;
grid-row: 1/1;
display: flex;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 100%;
margin-top: 6px;
border: none;
background: linear-gradient(#9b111e, black, #9b111e);
cursor: pointer;
outline:none;
:hover{
    background: linear-gradient(black, #9b111e);
    color: #FFF;
}   
`
const P = styled.p`
display: flex;
align-items: center;
color: white;
font-weight: bold;
margin-top: 20px;
`


function Logo(props) {
    return (
        <Button onClick={props.a}>
            <P>Matchs</P>
        </Button>
    );
  }
  
  export default Logo;