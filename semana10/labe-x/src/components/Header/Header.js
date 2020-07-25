import React from 'react';
import { useHistory, useParams, useLocation} from "react-router-dom";
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
   const location = useLocation();
   const [goToLogin] = useUrl("/login/logando")
   const [goToHome] = useUrl("/home")
   const displayButton = pathParams.log === "logando" ? "none" : "block"

   const deslogar = ()=>{
    window.localStorage.removeItem("token")
    goToHome()
   }
   const renderizaBotao = ()=>{
     if(location.pathname === "/" || location.pathname === "/home" || location.pathname === "/inscricao"){
        return <But display={displayButton} cor={"blue"} onClick={goToLogin}>Login</But>
     }else {
        return <But display={displayButton} cor={"red"} onClick={deslogar}>Logout</But>
     }
   }
  return (
    <Head>
        <h1>LabeX</h1>
        {renderizaBotao()}
       
    </Head>
  );
}
export default Header;

 {/* {location.pathname === "/" && location.pathname !== "/home" ?
          <But display={displayButton} cor={"blue"} onClick={goToLogin}>Login</But> :
          <But display={displayButton} cor={"red"} onClick={deslogar}>Logout</But>} */}