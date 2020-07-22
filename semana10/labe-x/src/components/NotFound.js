import React from 'react';
import { useHistory, useParams} from "react-router-dom";
import styled from "styled-components";


function Header() {
  const history = useHistory();
  const pathParams = useParams();
  const goToLogin = ()=>{
    history.push("/login/logando")
  } 
  const goToHome =() =>{
    history.push("/home")
  }

  return (
    <div>
        <h1>404</h1>
        <div>Se deseja fazer seu Login, digite "login/logando" na url invés de apenas "login"!</div>
    </div>
  );
}
export default Header;