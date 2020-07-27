import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {Main, Body} from "./Styled/styles"
import useUrl, {link} from "./Funcoes"

function CreateTravel() {
const [goToHome]=  useUrl("/home/login")
const [viagem, setViagem]= useState({})
const [nome, setNome]= useState("")
const [planeta, setPlaneta]= useState("")
const [data, setData]= useState("")
const [descricao, setDescricao]= useState("")
const [duracao, setDuracao]= useState("")
const history = useHistory();

const onchangeNome = event =>{
    setNome(event.target.value)
}

const onchangePlaneta = event =>{
    setPlaneta(event.target.value)
}

const onchangeData = event =>{
    setData(event.target.value)
}

const onchangeDescricao = event =>{
    setDescricao(event.target.value)
}

const onchangeDuracao = event =>{
    setDuracao(event.target.value)
}
const token = window.localStorage.getItem("token");

useEffect(() => {

  if (token === null) {
    history.push("/login/logando");
  } else {
    console.log("Hahaha")
  }
}, [history]);

const criaViagem = (event)=>{
  event.preventDefault()
  const headers = {
    headers: {
      auth: token
    }
  }
    const body = {
        name: nome,
        planet: planeta,
        date: data,
        description: descricao,
        durationInDays: duracao
    }
    axios
    .post(`${link}/trips`, body, headers)
    .then(()=>{
        alert("Viagem Criada")
    })
    .catch(err=>{
        console.log(err.message)
        console.log(`${nome}, ${planeta}, ${data}, ${descricao}, ${duracao}`)
    })
}

  return (
    <Main>
        <button onClick={goToHome}>Home</button>
        <form onSubmit={criaViagem}>
          <div>
            <label>Nome</label>
            <input value={nome} onChange={onchangeNome} required/>
          </div>
          <div>
            <label>Planeta</label>
            <input value={planeta} onChange={onchangePlaneta} required/> 
          </div>
          <div>
              <label>Data</label>
            <input value={data} onChange={onchangeData} type={"date"} required/>
          </div>
          <div>
            <label>Descrição</label>
            <input value={descricao} onChange={onchangeDescricao} required/>   
          </div>
          <div>
            <label>Duração</label>
            <input value={duracao} onChange={onchangeDuracao} required/>
          </div>
          <button>Cria Viagem</button>
        </form>
    </Main>
  );
}
export default CreateTravel;