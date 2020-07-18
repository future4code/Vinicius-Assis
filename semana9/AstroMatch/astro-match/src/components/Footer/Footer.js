import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import axios from "axios";
import {link} from "../index"

const Rodape = styled.footer`
grid-column: 1/5;
grid-row: 3/3;
display: flex;
justify-content: space-around;
align-items: center;
`
const Button = styled.button`
grid-row: 1/1;
display: flex;
align-items: center;
justify-content: center;
/*margin-left: ${props => props.ml};
margin-right: ${props => props.mr};*/
width: 60px;
height: 60px;
border-radius: 100%;
margin-top: 6px;
border: none;
background: radial-gradient( #00ced1, black,  #00ced1);
cursor: pointer;
transition: 0.5s;
outline:none;
:hover{
    transform: translate3d(2%, -2%, 0) scale3d(1.3, 1.3, 1.3);
    background: ${props => props.hover};
}  
:active{
  border: none;
} 
`
const P = styled.p`
display: flex;
align-items: center;
color: white;
font-weight: bold;
margin-top: 30px;
font-size: 30px;
`
function Footer(props) {
 
  const escolhePessoa = ()=>{
    const body = {
      id:props.persons.id,
      choice: true
    }
    axios
    .post(`${link}/choose-person`,body)
    .then(()=>{
      props.pegaPessoa()
    }).catch(err=>{
      console.log(err.message)
    })
  }
  const rejeitaPessoa = ()=>{
    const body = {
      id:props.persons.id,
      choice: false
    }
    axios
    .post(`${link}/choose-person`,body)
    .then(()=>{
      props.pegaPessoa()
    }).catch(err=>{
      console.log(err.message)
    })
  }
    return (
      <Rodape>
        <Button ml={"0px"} hover={"linear-gradient(#9b111e, black, #9b111e)}"} onClick={rejeitaPessoa}>
          <P>
            &#10006;
          </P>
        </Button>
        <Button ml={"89px"} mr={"100px"} hover={"linear-gradient(black, green)}"} onClick={escolhePessoa}>
          <P>
            &#10084;
          </P>
        </Button>
      </Rodape>
    );
  }
  
  export default Footer;