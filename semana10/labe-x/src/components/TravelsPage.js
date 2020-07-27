import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {Main} from "./Styled/styles"
import useUrl, {link} from "./Funcoes"

function TravelPage() {
  const [viagens, setViagens]= useState([])
  const [goToHome]=  useUrl("/home/login")

  const pegaViagens = () =>{
    axios
    .get(`${link}/trips`)
    .then(response=>{
      setViagens(response.data.trips)
      console.log(viagens)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  useEffect(()=>{
    pegaViagens()
  }, [])

  const detail = ()=>{
    axios
    .then(`${link}`)
  }

  const abc = viagens.map((a)=>{
    return <div>{a.name} <span>(i)</span></div>
  })
  return (
    <Main>
      <button onClick={goToHome}>Home</button>
        AAAAAAAAAAAA
        {abc}
    </Main>
  );
}
export default TravelPage;