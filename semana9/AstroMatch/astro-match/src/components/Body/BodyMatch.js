import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import Footer from "../Footer/Footer"


const Div = styled.div`
grid-column: 1/5;
grid-row: 2/3;
border-bottom: 1px solid #00ced1;
border-top: 1px solid #00ced1;
`
const Img = styled.img`
width: 350px;
height: 350px;
border-top: 10px solid white;
transition: 0.5s;
:hover{
  transform: translate3d(2%, -2%, 0) scale3d(1.3, 1.3, 1.3);
  border-radius: 100%;
  border: none;
}
`

function BodyMatch(props) {

    return (
      <Div>
       <Img src={props.persons.photo}/>
        {props.persons.name && <h2>{props.persons.name}, {props.persons.age}</h2>}
        <div>{props.persons.bio}</div>
      </Div>
    );
  }
  
  export default BodyMatch;