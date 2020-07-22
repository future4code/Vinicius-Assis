import React from 'react';
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles"

function RegistrationPage() {
    const history = useHistory();
    const goToHome = ()=>{
      history.push("/")
    }
  return (
    <Main>
      <button onClick={goToHome}>Home</button>
      <div>
        <label>Idade:</label>
        <input/>
      </div>
      <div>
        <label>Porque Deseja ir:</label>
        <input/>
      </div>
      <div>
        <label>Profissão:</label>
        <input/>
      </div>
      <div>
        <label>Nacionalidade:</label>
        <input/>
      </div>
      <div>
        <button>Inscrever-se</button>
      </div>
    </Main>
  );
}
export default RegistrationPage;