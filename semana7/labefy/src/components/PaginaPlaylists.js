import React from 'react';
import styled from "styled-components";
import axios from "axios";
import Musicas from "./MusicasPlaylist"

const Div = styled.div`
text-align: ${props => props.align};
`;

const DeletarPlaylist = styled.img`
  height: 25px;
`;

const Button = styled.button`
border: none;
background-color: white;
`

const link = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
    headers: {
      Authorization: "vinicius-fredeanelle-turing"
    }
  };
  
class PaginaPlaylists extends React.Component{
 state={
   Paginas: "B",
   Playlists: [],
 }

 componentDidMount = ()=>{
   this.pegaPlaylist();
 }

 pegaPlaylist = () =>{
   axios
      .get(link, axiosConfig)
      .then(response=>{
        this.setState({Playlists: response.data.result.list})
      })
      .catch(erro=>{
        console.log(erro.message)
      })
 }
 vizualisaPlaylist = playlistId =>{
  axios
     .get(`${link}/${playlistId}`, axiosConfig)
     .then(() =>{
      this.pegaPlaylist();
     })
     .catch(erro=>{
       console.log(erro.message)
     })
}

 deletePlaylist = playlistId => {
  axios
    .delete(`${link}/${playlistId}`, axiosConfig)
    .then(() => {
      this.pegaPlaylist();
    })
    .catch(err => {
      console.log(err.message);
    });
};

goMusicas = ()=>{
    this.setState({
      Paginas: "A",
    })
}



  render(){
    const music = this.state.Paginas === "A" ? <Musicas/> : console.log

    return (
      <div>
        {this.state.Playlists.length === 0 && <img src={"https://desecsecurity.com/img/load_01.gif"}/> }
        {this.state.Playlists.map(playlist => {
          return (
          <div>
            <Button onClick={this.goMusicas} key={playlist.id}>
              {playlist.name}
            </Button>
            <DeletarPlaylist onClick={() => {this.deletePlaylist(playlist.id)}} src={"https://imageog.flaticon.com/icons/png/512/458/458594.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"}/>
          </div> 
          );
        })}
        {music}
      </div>
    );
  }
}

export default PaginaPlaylists;