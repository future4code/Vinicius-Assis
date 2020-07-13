import React from 'react';
import './App.css';
import styled from "styled-components";
import Registro from "./components/Registro";
import ListaRegistro from "./components/ListaRegistros";

const Div = styled.div`
background-color: white;
`
const Bot = styled.button`
background-color: black;
color: white;
`

class App extends React.Component{
    state={
      registro: "Registro",
    }

    handleClickCarrinho = () => {
      if (this.state.registro === "Registro") {
        this.setState({ registro: "Lista" });
      } else {
        this.setState({ registro: "Registro" });
      }
    };
  

  render(){
    const renderiza = this.state.registro === "Registro" ? <Registro /> : <ListaRegistro />;
    const nomeDoBotao = this.state.registro === "Registro" ?  "Ir para Lista de Registros" : "Ir para Cadastro";

    return(
      <div>
        <button onClick={this.handleClickCarrinho}>{nomeDoBotao}</button> 
      <Div>{renderiza}
      
      </Div>
      </div>
      
    ) 
  };
  


    /*return (
      <div>
        <Registro/>
        <ListaRegistro/>
      </div>
     
    );*/
 
}

export default App;

