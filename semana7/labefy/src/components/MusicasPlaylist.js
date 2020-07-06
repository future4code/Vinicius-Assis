import React from 'react';
import styled from "styled-components";
import axios from "axios";

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

class Musicas extends React.Component{
    state={
        Musicas: [],
      }
     
     
      pegaPlaylist = () =>{
        axios
           .get(link, axiosConfig)
           .then(response=>{
             this.setState({Musicas: response.data.result.list})
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
           Musicas
           </div>
         );
       }
     }
     
export default Musicas;