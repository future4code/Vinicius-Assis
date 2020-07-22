import React from 'react';
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles"
import useUrl from "./Funcoes"

function RegistrationPage() {
    const history = useHistory();
    const [goToHome] = useUrl("/")

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