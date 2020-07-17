import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import Footer from "../Footer/Footer"


const Div = styled.div`
grid-column: 1/4;
grid-row: 2/3;
border-bottom: 1px solid black;
border-top: 1px solid black;
`
const Img = styled.img`
width: 50px;
height: 50px;
`

function BodyMatch(props) {

  useEffect(()=>{
    props.pegaPessoa()
  }, [])

    return (
      <Div>
       <Img src={props.persons.photo}/>
        {props.persons.name && <h2>{props.persons.name}, {props.persons.age}</h2>}
        <div>{props.persons.bio}</div>
      </Div>
    );
  }
  
  export default BodyMatch;