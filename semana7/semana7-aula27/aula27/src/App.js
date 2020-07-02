import React from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";

const Main = styled.main`
color: red;
text-align: center;
`
const links = "https://swapi.dev/api/people";

class App extends React.Component{
  state={
    Pokemons:[],
    PokeNome: "",
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
     console.log(response.data)
   }).catch(e => {
     console.log(e.message)
   })
  }
  render(){
    console.log(this.state.PokeNome)
    return (
      <Main>
        <select onChange={this.onChangePokenome}>
          <option value={""}>Escolha seu Pokemon</option>
          {this.state.Pokemons.map(pok =>{
            return <option key={pok.name} value={pok.name}>{pok.name}</option>
          })}
        </select>
      </Main>
    );
  }
}

export default App;
