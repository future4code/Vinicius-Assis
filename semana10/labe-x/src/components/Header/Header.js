import React from 'react';
import { useHistory, useParams, useLocation} from "react-router-dom";
import styled from "styled-components";
import {But} from "../Styled/styles"
import useUrl, {goToLogin, goToHome} from "../Funcoes"

const Head = styled.header`
grid-row: 1/2;
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
color: white;
height: 100%;
>*{
  margin: 0 45px;
}
`
const H1 = styled.h1`
color: ${props => props.cor};
cursor: pointer;
:hover{
      color: ${props => props.hover};
    }
`
function Header() {
   const history = useHistory();
   const pathParams = useParams();
   const location = useLocation();
   const [goToLogin] = useUrl("/login/logando")
   const [goToHome] = useUrl("/home")
   const displayButton = pathParams.log === "logando" ? "none" : "block"
   const goToInitialPage = ()=> {
      if(location.pathname === "/home" || location.pathname === "/" || location.pathname === "/inscricao" || location.pathname === "/login/logando"){
      history.push("/home")
      }else{
        history.push("/home/login")
      }
    }
   const deslogar = ()=>{
    window.localStorage.removeItem("token")
    goToHome()
   }
   const renderizaBotao = ()=>{
     if(location.pathname === "/" || location.pathname === "/home" || location.pathname === "/inscricao"){
        return <But display={displayButton} margem={"0px 30px 0px 0px"} cumprimento={"7%"} altura={"50%"} radius={"5px"} fonte={"15px"} hover={mudaColor} cor={"black"} onClick={goToLogin}>Login</But>
     }else {
        return <But display={displayButton} margem={"0px 30px 0px 0px"} cumprimento={"7%"} altura={"50%"} radius={"5px"} fonte={"15px"} hover={mudaColor} cor={"black"} onClick={deslogar}>Logout</But>
     }
   }

   const mudaColor = ()=>{
    if(location.pathname === "/" || location.pathname === "/home" || 
    location.pathname === "/inscricao" || location.pathname === "/login/logando"){
      return "#00D9D9"
    }else{
      return "#B509FF"
    }
  }

   const mudaLetra = ()=>{
    if(location.pathname === "/" || location.pathname === "/home" || 
    location.pathname === "/inscricao" || location.pathname === "/login/logando"){
      return "#008B8B"
    }else{
      return "#8C0E6B"
    }
  }
  return (
    <Head>
        <H1 cor={mudaLetra} hover={mudaColor} onClick={goToInitialPage}>LabeX</H1>
        {renderizaBotao()}
       
    </Head>
  );
}
export default Header;

 {/* {location.pathname === "/" && location.pathname !== "/home" ?
          <But display={displayButton} cor={"blue"} onClick={goToLogin}>Login</But> :
          <But display={displayButton} cor={"red"} onClick={deslogar}>Logout</But>} */}