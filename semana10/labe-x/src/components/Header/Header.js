import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But} from "../Styled/styles"
import {goToLogin, goToHome} from "../HomePage"

const Head = styled.header`
display: flex;
background-color: black;
color: white;
`

function Header() {
  const history = useHistory();
  const pathParams = useParams();
  const goToLogin = ()=>{
    history.push("/login/logando")
  } 
  const goToHome =() =>{
    history.push("/home")
  }

  return (
    <Head>
        <h1>LabeX</h1>
        <But display={pathParams.log === "logando" ? "none" : "block"}cor={pathParams.tipo === "login" ||history === "viagens" ? "red" : "blue"} onClick={pathParams.tipo === "login" ? goToHome : goToLogin}>{pathParams.tipo === "login" ? "Logout" : "Login"}</But>
    </Head>
  );
}
export default Header;