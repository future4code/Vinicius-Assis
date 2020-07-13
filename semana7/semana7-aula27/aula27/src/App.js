import React from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";

const Main = styled.main`
color: red;
text-align: center;
`
const links = "https://pokeapi.co/api/v2/pokemon";

class App extends React.Component{
  state={
    Pokemons:[],
    PokeImagem: "",
  }

  componentDidMount = () =>{
    this.pegaPersonagens()
  }

  pegaPersonagens = () =>{
    axios
      .get(links)
      .then(response =>{
        this.setState({Pokemons: response.data.results})
      }).catch(e =>{
        console.log(e.message)
      })
  }

  onChangePokenome = (event) =>{
    const pokeNome = event.target.value;
   axios
   .get(`${links}/${pokeNome}`)
   .then(response => {
     this.setState({
       PokeImagem: response.data.sprites.front_default
     })
   }).catch(e => {
     console.log(e.message)
   })
  }
  render(){
    return (
      <Main>
        <select onChange={this.onChangePokenome}>
          <option value={""}>Escolha seu Pokemon</option>
          {this.state.Pokemons.map(pok =>{
            return <option key={pok.name} value={pok.name}>{pok.name}</option>
          })}
        </select>
        <div>
          {this.state.PokeImagem && (<img src={this.state.PokeImagem} alt="Pokemon" />)}
        </div>
        
      </Main>
    );
  }
}

export default App;
