import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But, Main} from "./Styled/styles"

const Header = styled.header`
display: flex;
height: 7vh;
background-color: black;
`
function HomePage() {
    const history = useHistory();
    const pathParams = useParams();
    const goToRecord = () =>{
        history.push("/inscricao")
    }
    const goToTravel = ()=>{
        history.push("/viagens")
    }
  return (
    <Main>
        
        <div>
            <p>Descrição</p>
            {pathParams.tipo === "login" ? <button onClick={goToTravel}>Lista de Viagens</button> : <button onClick={goToRecord}>Ir para página de Incrição</button>}
        </div>
        <div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")}
            {pathParams.tipo === "login" ? <button>Criar Nova Viagem</button> : console.log("Não Logado")} 
        </div>
        <div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")} 
            {pathParams.tipo === "login" ? <button>Aprovação de Candidatos</button> : console.log("Não Logado")}
        </div>
    </Main>
  );
}
export default HomePage;