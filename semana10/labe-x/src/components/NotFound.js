import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import useUrl from "./Funcoes"

function Not() {

  const [goToHome] = useUrl("/home")

  return (
    <div>
        <button onClick={goToHome}>Voltar para Home</button>
        <h1>404</h1>
        <div>Página não encontrada</div>
    </div>
  );
}
export default Not;