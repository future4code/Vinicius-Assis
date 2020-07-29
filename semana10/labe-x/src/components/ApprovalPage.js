import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import {Main} from "./Styled/styles"
import useUrl from "./Funcoes"

function ApprovalPage() {
const [goToHome]=  useUrl("/home/login")

  return (
    <Main>
        <button onClick={goToHome}>Home</button>
        <div>
          <img src={"https://media1.giphy.com/media/14uQ3cOFteDaU/giphy.gif"}/>
        </div>
       <h2>Ops! Página em manutenção! Em breve estará disponivel para acesso. Agradecemos a compreensão.</h2>
    </Main>
  );
}
export default  ApprovalPage;