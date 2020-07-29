import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {Main} from "./Styled/styles"
import useUrl, {link} from "./Funcoes"

function TravelPage() {
  const [viagens, setViagens]= useState([])
  const [goToHome]=  useUrl("/home/login")
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const [detalhes, setDetalhes]= useState([])
  const [idTrip, setIdTrip]= useState("")
  //const [aprovacao, setAprovacao]= useState()
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

  useEffect(() => {

    if (token === null) {
      history.push("/login/logando");
    } else {
      console.log("Hahaha")
    }
  }, [history]);

  useEffect(()=>{
    pegaViagens()
  }, [])

  const detail = (a)=>{
    const headers = {
      headers: {
        auth: token
      }
    }
    axios
    .get(`${link}/trip/${a}`, headers)
    .then(response=>{
      setDetalhes(response.data.trip)
      console.log(detalhes)
      setIdTrip(a)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  const abc = viagens.map((a)=>{
    return <div>{a.name} <span onClick={()=>detail(a.id)}>(i)</span></div> 
  })

  const candidato = detalhes.candidates && detalhes.candidates.map((a)=>{
   return <li>{a.name} <button onClick={()=> decide(a.id, true)}>Aprovar</button><button onClick={()=> decide(a.id, false)}>Reprovar</button></li>
  })

  const decide = (idCandidato, escolha)=>{

    const body ={
      "approve": escolha,
    }
    const headers = {
      headers: {
        auth: token
      }
    }

    axios
    .put(`${link}/trips/${idTrip}/candidates/${idCandidato}/decide`, body, headers )
    .then(()=>{
      //setAprovacao(true)
      alert(escolha === false ? "Usuário Reprovado" : "Usuário Aprovado")
      detail()
    })
    .catch(err=>{
      console.log(err.message)
      console.log(idTrip)
      console.log(`${link}/trips/${idTrip}/candidates/${idCandidato}`)
    })
  }

  // const decideNao = (idCandidato)=>{
  //   const body ={
  //     setAprovacao(false)
  //     "approve": aprovacao,
  //   }
  //   const headers = {
  //     headers: {
  //       auth: token
  //     }
  //   }
  //   axios
  //   .put(`${link}/trips/${idTrip}/candidates/${idCandidato}/decide`, body, headers )
  //   .then(()=>{
  //     alert("Usuário Reprovado")
  //   })
  //   .catch(err=>{
  //     console.log(err.message)
  //     console.log(idTrip)
  //     console.log(`${link}/trips/${idTrip}/candidates/${idCandidato}`)
  //   })
  // }

  const abacate = detalhes.name && <div>
    <h3>{detalhes.name}</h3>
  <ul>
    <li>
      {detalhes.planet}
    </li>
    <li>
      {detalhes.durationInDays} 
    </li>
    <li>
      {detalhes.description}
    </li>
  </ul>
  <h4>Candidatos a viagem:</h4>
  <ul>
    {candidato}
  </ul>
</div>

  return (
    <Main>
      <button onClick={goToHome}>Home</button>
        {abc}
        {abacate}
    </Main>
  );
}
export default TravelPage;