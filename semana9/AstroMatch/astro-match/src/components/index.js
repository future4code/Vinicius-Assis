import React from "react"
import {useState, useEffect} from 'react';
import styled from "styled-components"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BodyMatch from "./Body/BodyMatch"
import BodyList from "./Body/BodyList";

const Main = styled.main`
grid-column: 2/2;
grid-row: 2/3;
background-color: white;
width: 100%;
height: 100%;
text-align: center;
border: 3px outset #00ced1;
border-radius: 10px;
display: grid;
grid-template-rows: 0.6fr 5fr 0.8fr;
`;

function Index() {
    const [body, setBody] = useState(true)

   const a = ()=>{
       setBody(!body)
    }
    
    const teste = body === true ? <BodyMatch/> : <BodyList/>
  return (
      <Main>
        <Header a={a}/>
        {teste}
        <Footer/>
      </Main>
  );
}

export default Index;