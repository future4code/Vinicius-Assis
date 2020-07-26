import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But, Main} from "./Styled/styles"
import useUrl from "./Funcoes"

const Header = styled.header`
display: flex;
height: 7vh;
background-color: black;
`
function HomePage() {
    const pathParams = useParams();
    const [goToRecord] = useUrl("/inscricao")
    const [goToTravel] =  useUrl("/logado/viagens")
    const [newTravel] =  useUrl("/logado/nova-viagem")
    const [approvalPage] =  useUrl("/logado/pagina-de-aprovacao")

  return (
    <Main>
        
        <div>
            <p>Descrição</p>
            {pathParams.tipo === "login" ? <button onClick={goToTravel}>Lista de Viagens</button> : <button onClick={goToRecord}>Ir para página de Incrição</button>}
        </div>
        <div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")}
            {pathParams.tipo === "login" ? <button onClick={newTravel}>Criar Nova Viagem</button> : console.log("Não Logado")} 
        </div>
        <div>
            {pathParams.tipo === "login" ? <p>Descrição</p> : console.log("Não Logado")} 
            {pathParams.tipo === "login" ? <button onClick={approvalPage}>Aprovação de Candidatos</button> : console.log("Não Logado")}
        </div>
    </Main>
  );
}
export default HomePage;