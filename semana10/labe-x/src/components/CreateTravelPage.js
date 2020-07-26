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

const criaViagem = ()=>{
    const body = {
        name: nome,
        planet: planeta,
        date: data,
        description: descricao,
        durationInDays: duracao
    }
    axios
    .post(`${link}/trips`, body)
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
       <div>
           <label>Nome</label>
         <input value={nome} onChange={onchangeNome}/>
       </div>
       <div>
           <label>Planeta</label>
         <input value={planeta} onChange={onchangePlaneta} /> 
       </div>
       <div>
           <label>Data</label>
         <input value={data} onChange={onchangeData}  type={"date"}/>
       </div>
       <div>
         <label>Descrição</label>
         <input value={descricao} onChange={onchangeDescricao} />   
       </div>
       <div>
         <label>Duração</label>
         <input value={duracao} onChange={onchangeDuracao} />
       </div>
       <button onClick={criaViagem}>Cria Viagem</button>
    </Main>
  );
}
export default CreateTravel;