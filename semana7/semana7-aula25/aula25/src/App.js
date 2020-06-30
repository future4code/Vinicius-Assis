import React from 'react';
import './App.css';
import styled from "styled-components";
import Registro from "./components/Registro";
import ListaRegistro from "./components/ListaRegistros"

class App extends React.Component{
    state={
      Registro: false
    }

  render(){

    return (
      <div>
        <Registro/>
        <ListaRegistro/>
      </div>
     
    );
  }
 
}

export default App;
