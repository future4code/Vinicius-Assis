import React from 'react';
import { useHistory, useParams, useLocation} from "react-router-dom";
import styled from "styled-components";
import {But, Main} from "./Styled/styles"
import useUrl from "./Funcoes"

const H2 = styled.h2`
margin: ${props => props.margem};
text-align: center;
grid-column: ${props => props.ColunaGrid};
color: ${props => props.cor};
`

const Div = styled.div`
grid-row: ${props => props.LinhaGrid};
grid-column: ${props => props.ColunaGrid};
border-bottom: ${props => props.borda};
display: grid;
`

function HomePage() {
    const pathParams = useParams();
    const location = useLocation();
    const [goToRecord] = useUrl("/inscricao")
    const [goToTravel] =  useUrl("/logado/viagens")
    const [newTravel] =  useUrl("/logado/nova-viagem")
    const [approvalPage] =  useUrl("/logado/pagina-de-aprovacao")

    const mudaCor = ()=>{
        if(location.pathname === "/" || location.pathname === "/home" || 
        location.pathname === "/inscricao" || location.pathname === "/login/logando"){
          return "1.5px solid blue"
        }else{
          return "1.5px solid red"
        }
      }
    const mudaMainColuna = ()=>{
        if(location.pathname === "/" || location.pathname === "/home"){
            return "1fr 1fr 1fr 1fr"
        }else if(location.pathname === "/home/login"){
            return ""
        }
    }
    const mudaMainLinha = ()=>{
        if(location.pathname === "/" || location.pathname === "/home"){
            return "1fr 1fr 1fr 1fr"
        }else if(location.pathname === "/home/login"){
            return "1fr 1fr 1fr"
        }
    }
  return (
    <Main borda={mudaCor} display={"grid"} coluna={mudaMainColuna} linha={mudaMainLinha}>
        <Div ColunaGrid={"1/5"} borda={"1.5px solid black;"}>
            {pathParams.tipo === "login" ? console.log("A") : <H2 margem={"80px 80px 80px 80px"}>Bem Vindos ao LabeX. Nossa empresa fornece viagens para outros planetas com total segurança e com Diversão garantida. Esperamos que você goste do nosso portal. Venha participar dessa experiência!</H2>}
        </Div>
        <Div ColunaGrid={"1/3"} LinhaGrid={"3/3"}>
            {pathParams.tipo === "login" ? console.log("A") : <H2 ColunaGrid={"1/2"}>Venha participar dessa experiência! <br></br> Basta clicar no botão e se inscrever, você vai amar!</H2>}
        </Div>
        <Div ColunaGrid={"4/4"} LinhaGrid={"3/3"}>
            {pathParams.tipo === "login" ? <But onClick={goToTravel} background={"black"}>Lista de Viagens</But> : <But onClick={goToRecord} background={"black"} cor={"#00D9D9"}>Ir para página de Incrição</But>}
        </Div>
        <Div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")}
        </Div>
        <Div>
            {pathParams.tipo === "login" ? <But onClick={newTravel}>Criar Nova Viagem</But> : console.log("Não Logado")} 
        </Div>
        <Div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")} 
        </Div>
        <Div>
            {pathParams.tipo === "login" ? <But onClick={approvalPage}>Aprovação de Candidatos</But> : console.log("Não Logado")}
        </Div>
    </Main>
  );
}
export default HomePage;