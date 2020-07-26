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
       CCCCCCCCCCCCCCC
    </Main>
  );
}
export default  ApprovalPage;