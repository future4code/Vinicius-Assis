import React from 'react';
import styled from "styled-components";
import axios from "axios";
import Variaveis from "./Variaveis";

const Main = styled.main`
height: 100vh;
`
const Div = styled.div`
text-align: ${props => props.align};
`;
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
      .get(Variaveis)
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