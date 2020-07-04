import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Main = styled.main`
height: 100vh;
`
const Div = styled.div`
text-align: ${props => props.align};
`;

const link = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
      Authorization: "vinicius-fredeanelle-turing"
    }
  };
  
class PaginaPlaylists extends React.Component{
 state={
   Pagina: "CriaPlaylista",
   Playlists: [
     {
      id: "1",
      name: "",
     },
   ],
   NomePlaylist: "",
 }
 pegaPlaylist = () =>{
   axios
      .get()
      .then(response=>{

      })
 }

  render(){
    return (
      <Main>
          <h1>AAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <Div align={"center"}>
       
      </Div>
      </Main>
    );
  }
}

export default PaginaPlaylists;