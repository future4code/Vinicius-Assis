import React from 'react';
import styled from "styled-components"

const Div = styled.div`
border-bottom: 1px solid black;
border-top: 1px solid black;
background-color: blue;
`
function BodyMatch() {
    return (
      <Div>
       Olá Mundo!
      </Div>
    );
  }
  
  export default BodyMatch;