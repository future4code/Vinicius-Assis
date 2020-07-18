import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {link} from "../index"
import axios from "axios"

const Div = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  grid-column: 1/5;
  grid-row: 2/4;
`
const DV = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  width: 100%;
  cursor: pointer;
  padding: 10px 0px;
  list-style: none;
  transition: all 0.2s ease 0s;
  :hover{
    transform: translate3d(2%, -2%, 0) scale3d(0.9, 0.9, 0.9);
  }
`
const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: inline;
  transition: 0.5s;
  :hover{
  transform: translate3d(2%, -2%, 0) scale3d(1.5, 1.5, 1.5);
  border-radius: 100%;
  border: none;
}
`
const P = styled.h3`
  display: inline;
  margin-left: 16px;
`
const Button = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 45%;
  margin-top: 6px;
  margin-right: 16px;
  border: solid 2px #9b111e;
  background: white;
  color: #9b111e;
  cursor: pointer;
  transition: 0.5s;
  outline:none;
  :hover{
    background:#9b111e;
    color: white;
  }`

function BodyList() {
  const [like, setLike]=useState([])

  const pegaMatch = ()=>{
    axios
    .get(`${link}/matches`)
    .then(response=>{
      setLike(response.data.matches)
    }).catch(err=>{
      console.log(err.message)
    })
  }

  const apaga = ()=>{
    axios
    .put(`${link}/clear`)
    .then(()=>{
      alert("Apagou tudo")
      pegaMatch()
    }).catch(err=>{
      console.log(err.message)
    })
    
  }
  
  useEffect(()=>{
    pegaMatch()
  }, [])
  
    return (
      <Div>
       {like.map((a)=>{
         return (
         <DV>
           <Img src={a.photo}/> 
           <P>{a.name}</P>
         </DV>  
         )
       })}
       <div>
        <label>Excluir Matchs</label>
        <Button onClick={apaga}>&#10008;</Button>
       </div>
      </Div>
    );
  }
  
  export default BodyList;