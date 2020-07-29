import React from 'react';
import { useHistory, useParams, useLocation} from "react-router-dom";
import styled from "styled-components";
import {But} from "../Styled/styles"
import {goToLogin, goToHome} from "../HomePage"

const Foot = styled.footer`
grid-row: 3/4;
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: ${props => props.cor};
height: 100%;
`
const H1 = styled.h3`
margin: 0;
padding: 0;
`

function Footer() {
  const history = useHistory();
  const pathParams = useParams();
  const location = useLocation();
  const goToLogin = ()=>{
    history.push("/login/logando")
  } 
  const goToHome =() =>{
    history.push("/home")
  }
  const mudaCor = ()=>{
    if(location.pathname === "/" || location.pathname === "/home" || 
    location.pathname === "/inscricao" || location.pathname === "/login/logando"){
      return "#08A377"
    }else{
      return "#5A0E8C"
    }
  }
  return (
    <Foot cor={mudaCor}>
        <H1>Copyright© - Developed by: Vinícius Fredeanelle</H1>
    </Foot>
  );
}
export default Footer;