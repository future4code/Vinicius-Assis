import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {But} from "./Styled/styles"

const Header = styled.header`
display: flex;
height: 7vh;
background-color: black;
`
const Div = styled.main`
margin: 0;
padding: 0;
height: 86vh;
whidth: 100vw;
`
const Footer = styled.footer`
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
  return (
      <div>
            <Div>
            <button onClick={goToRecord}>Inscreva-se</button>
            <p>{pathParams.tipo === "login" ? "Olá Mundo" : "Omg"}</p>
            </Div>
        <Footer>

        </Footer>
      </div>
  );
}
export default HomePage;