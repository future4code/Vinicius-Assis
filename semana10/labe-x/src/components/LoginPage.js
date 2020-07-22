import React from 'react';
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles";

function LoginPage() {
    const history = useHistory();
    const goToHome = ()=>{
      history.push("/")
    }
    const goToHomeLogin = ()=>{
        history.push("/home/login")
    }

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