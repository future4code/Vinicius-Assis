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
class CriarPlaylist extends React.Component{
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
 onChangePlaylis = (event) =>{
  this.setState({
    NomePlaylist: event.target.value
  })
}

  render(){
    return (
      <Main>
      <Div align={"center"}>
        <label>Nome da Playlist:</label>
        <input value={this.state.NomePlaylist} onChange={this.onChangePlaylis} />
        <button>Criar Playlist</button>
      </Div>
      </Main>
    );
  }
}

export default CriarPlaylist;