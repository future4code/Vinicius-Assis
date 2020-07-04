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

class CriarPlaylist extends React.Component{
 state={
   inputNomePlaylist:"",
 }

onChangePlaylist = (event)=>{
  this.setState({
    inputNomePlaylist: event.target.value
  })
}

criaPlaylist = ()=>{
  const body = {
    name: this.state.inputNomePlaylist,
  };
   axios
      .post(
        link, 
        body, 
        axiosConfig
      )
      .then(response=>{
        alert("Playlist Criada com sucesso!!")
      this.setState({inputNomePlaylist:""})
      })
      .catch(erro=>{
        alert(erro.message)
        console.log(erro.message)
      })
      console.log(this.state.inputNomePlaylist)
 }
  render(){
    return (
      <Main>
      <Div align={"center"}>
        <label>Nome da Playlist:</label>
        <input value={this.state.inputNomePlaylist} onChange={this.onChangePlaylist} />
        <button onClick={this.criaPlaylist}>Criar Playlist</button>
      </Div>
      </Main>
    );
  }
}

export default CriarPlaylist;