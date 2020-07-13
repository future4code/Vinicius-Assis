import React from 'react';
import './App.css';
import styled from "styled-components";
import PaginaPlaylists from "./components/PaginaPlaylists";
import CriarPlaylist from "./components/CriarPlaylist";

const Main = styled.main`
height: 100vh;
`
const Div = styled.div`
text-align: ${props => props.align};
`;
class App extends React.Component{
 state={
   Pagina: "Cadastro",
 }

 mudaBotao = ()=>{

   if(this.state.Pagina === "Cadastro"){
    this.setState({
      Pagina: "Playlists",
    })
   } else{
    this.setState({
      Pagina: "Cadastro",
    })
   }
 }

 

  render(){
  const pagina = this.state.Pagina === "Cadastro" ? <CriarPlaylist/> : <PaginaPlaylists/>
  const pag = this.state.Pagina === "Cadastro" ? "Playlists Criadas" : "Criar Playlist"
    return (
      <Main>
        <button onClick={this.mudaBotao}>{pag}</button>
      <Div align={"center"}>
        {pagina}
      </Div>
      </Main>
    );
  }
}

export default App;
