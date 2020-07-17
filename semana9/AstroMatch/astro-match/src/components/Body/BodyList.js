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
         <div>
           <img src={a.photo}/> 
           <p>{a.name}</p>
         </div>  
         )
       })}
       <button onClick={apaga}>Apagar Matchs</button>
      </Div>
    );
  }
  
  export default BodyList;