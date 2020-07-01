import React from 'react';
import './App.css';
import styled from "styled-components";
import Registro from "./components/Registro";
import ListaRegistro from "./components/ListaRegistros";
import Botao from "./components/Botao"

const Div = styled.div`
background-color: white;
`
const Bot = styled.button`
background-color: black;
color: white;
`

class App extends React.Component{
    state={
      registro: false,
    }

    handleClickCarrinho = () => {
      this.setState({ registro: !this.state.registro });
  };

  render(){
    
    const renderiza = this.state.registro ? <ListaRegistro /> : <Registro />;
    return <Div>{renderiza}
      <Botao clicar={this.handleClickCarrinho} next={"Aaaaaaaaa"}></Botao> 
      </Div>
  };
  


    /*return (
      <div>
        <Registro/>
        <ListaRegistro/>
      </div>
     
    );*/
 
}

export default App;

