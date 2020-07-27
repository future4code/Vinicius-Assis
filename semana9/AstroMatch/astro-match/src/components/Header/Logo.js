import React from 'react';
import styled from "styled-components"


export const Button = styled.button`
grid-column: ${props => props.coluna};
grid-row: 1/1;
margin-right: 8px;
display: flex;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 100%;
margin-top: 6px;
border: none;
background: linear-gradient(#9b111e, black, #9b111e);
cursor: pointer;
transition: 0.5s;
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
margin-top: 10px;
font-size: 30px;
`


function Logo(props) {
    return (
        <Button onClick={props.a} coluna={props.body === true ? "4/4" : "1/1"}>
            {props.body === true ? <P>&#10083;</P> : <P>&#8678;</P>}
        </Button>
    );
  }
  
  export default Logo;