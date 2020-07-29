import React, {useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles";
import useUrl, {link} from "./Funcoes"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [goToHome]=  useUrl("/home")
  const [goToHomeLogin] = useUrl("/home/login")

  const onChangeEmail = event => {
    setEmail(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };
    axios
      .post(`${link}/login`, body)
      .then(response => {
        window.localStorage.setItem("token", response.data.token);
        {goToHomeLogin()}
      })
      .catch(err => {
        console.log(err.message);
        alert("Acesso Negado")
      });
  };


  return (
    <Main>
      <button onClick={goToHome}>Home</button>
      <div>
        <label>Email:</label>
        <input value={email} onChange={onChangeEmail}/>
      </div>
      <div>
        <label>Senha:</label>
        <input value={password} type={"password"} onChange={onChangePassword}/>
      </div>
      <div>
        <button onClick={login}>Fazer Login</button>
      </div>
    </Main>
  );
}
export default LoginPage;