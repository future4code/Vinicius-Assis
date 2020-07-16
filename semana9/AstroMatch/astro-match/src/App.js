import React from 'react';
import styled from "styled-components"
import Index from "./components/index"

const Div = styled.body`
background-color: #252525;
width: 100wh;
height: 100vh;
display: grid;
grid-template-columns: 2fr 1.5fr 2fr;
grid-template-rows: 0.5fr 3fr 0.5fr;
`;
function App() {
  return (
    <Div>
      <Index/>
    </Div>
  );
}

export default App;
