import React from 'react';
import { useHistory } from "react-router-dom";

function RegistrationPage() {
    const history = useHistory();
    const goToHome = ()=>{
      history.push("/")
    }
  return (
    <div>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}
export default RegistrationPage;