import React from "react"
import {useState, useEffect} from 'react';
import styled from "styled-components"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import BodyMatch from "./Body/BodyMatch"
import BodyList from "./Body/BodyList";
import Logo from "./Header/Logo"
import axios from "axios"

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
grid-template-columns: 1fr 1fr 0.5fr;
`;

export const link = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-fredeanelle-turing"

function Index() {
    const [body, setBody] = useState(true)
    const [persons, setPersons]=useState({})

   const a = ()=>{
       setBody(!body)
    }
    
    const pegaPessoa = ()=>{
    axios
    .get(`${link}/person`)
    .then(response=>{
      setPersons(response.data.profile)
    }).catch(err=>{
      console.log(err.message)
    })
  }
    const teste = body === true ? <BodyMatch pegaPessoa={pegaPessoa} persons={persons}/> : <BodyList/>
    const foot = body === true ? <Footer persons={persons} /> : console.log("Aaaa")
  return (
      <Main>
        <Header/>
        <Logo a={a}/>
        {teste}
        {foot}
      </Main>
  );
}

export default Index;