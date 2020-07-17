import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import axios from "axios";
import {link} from "../index"
const Rodape = styled.footer`
background-color: ;
grid-row: 3/3;
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.button`
grid-column: 3/4;
grid-row: 1/1;
display: flex;
align-items: center;
justify-content: center;
margin-left: ${props => props.ml};
margin-right: ${props => props.mr};
width: 60px;
height: 60px;
border-radius: 100%;
margin-top: 6px;
border: none;
background: linear-gradient( #00ced1, black,  #00ced1);;
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
        <Button ml={"0px"} onClick={rejeitaPessoa}>
          <P>
            &#10006;
          </P>
        </Button>
        <Button ml={"89px"} mr={"100px"} onClick={escolhePessoa}>
          <P>
            &#10084;
          </P>
        </Button>
      </Rodape>
    );
  }
  
  export default Footer;