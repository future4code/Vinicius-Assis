import React from 'react';
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();
    const goToHome = ()=>{
      history.push("/")
    }
    const goToHomeLogin = ()=>{
        history.push("/home/login")
    }

  return (
    <div>
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
    </div>
  );
}
export default LoginPage;