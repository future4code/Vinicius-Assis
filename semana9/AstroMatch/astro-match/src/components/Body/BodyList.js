import React from 'react';
import styled from "styled-components"
const Div = styled.div`
background-color: red;
border-bottom: 1px solid black;
border-top: 1px solid black;
grid-column: 1/4;
grid-row: 2/4;
`
function BodyList() {
    return (
      <Div>
       Olá Mundo!
      </Div>
    );
  }
  
  export default BodyList;