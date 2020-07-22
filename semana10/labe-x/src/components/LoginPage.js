import React from 'react';
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles";
import useUrl from "./Funcoes"

function LoginPage() {
    const [goToHome]=  useUrl("/")
    const [goToHomeLogin] = useUrl("/home/login")
  return (
    <Main>
      <button onClick={goToHome}>Home</button>
      <div>
        <label>Email:</label>
        <input/>
      </div>
      <div>
        <label>Senha:</label>
        <input/>
      </div>
      <div>
        <button onClick={goToHomeLogin}>Fazer Login</button>
      </div>
    </Main>
  );
}
export default LoginPage;