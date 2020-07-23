import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But} from "../Styled/styles"
import useUrl, {goToLogin, goToHome} from "../Funcoes"

const Head = styled.header`
display: flex;
background-color: black;
color: white;
`

function Header() {
   const pathParams = useParams();
   const [goToLogin] = useUrl("/login/logando")
   const [goToHome] = useUrl("/home")
   const displayButton = pathParams.log === "logando" ? "none" : "block"

   const deslogar = ()=>{
    window.localStorage.removeItem("token")
    goToHome()
   }
    
   //

  return (
    <Head>
        <h1>LabeX</h1>
        {pathParams.tipo === "login" ?
          <But display={displayButton} cor={"red"} onClick={deslogar}>Logout</But> :
          <But display={displayButton} cor={"blue"} onClick={goToLogin}>Login</But>}
    </Head>
  );
}
export default Header;