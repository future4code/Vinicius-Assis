import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But} from "../Styled/styles"
import {goToLogin, goToHome} from "../HomePage"

const Foot = styled.footer`
display: flex;
background-color: black;
color: ${props => props.cor};
`

function Footer() {
  const history = useHistory();
  const pathParams = useParams();
  const goToLogin = ()=>{
    history.push("/login/logando")
  } 
  const goToHome =() =>{
    history.push("/home")
  }

  return (
    <Foot cor={pathParams.tipo === "login" ? "red" : "blue"}>
        <h1>Cabeçalho</h1>
    </Foot>
  );
}
export default Footer;