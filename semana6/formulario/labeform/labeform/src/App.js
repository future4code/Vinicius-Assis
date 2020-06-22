import React from 'react';
import './App.css';
import styled from 'styled-components';
import Form1 from './components/formulario1';
import Form2 from './components/formulario2';
import Form3 from './components/formulario3';
import Fim from './components/fim';

const Body = styled.body`
background-color: black;
text-align: center;
`
const Cabecalho = styled.header`
background-color: #9b111e;
color: white;
height: 6vh;
text-align: center;
`
const Titulo = styled.h1`
margin: 0;
`
const Main = styled.main`
background-color: white; 
height: 88vh;
margin-left: 2%;
margin-right: 2%;
`
const Botao = styled.button`
padding: ${props => props.padding};
margin-top: ${props => props.margem};
`
const Rodape = styled.footer`
background-color: #1C2833;
color: white;
text-align: center;
height: 6vh;
text-align: center;
`

class App extends React.Component{
  state = {
    Next: 1,
  }
  paginas = ()=>{

    switch (this.state.Next) {
      case 1:
        return <Form1/>;
        break;
      case 2:
        return <Form2/>;
        break;
      case 3:
        return<Form3/>;
        break;
      default:
        return <Fim/>;
        break;
    }
  }

  botao= ()=>{
    return this.setState({Next: this.state.Next +1})
  }
  render(){
    
    return (
    <Body>
        <Cabecalho>
          <Titulo>Cabeçalho</Titulo>
        </Cabecalho>
      <Main>
          {this.paginas()}
          {this.state.Next <= 3 ? <Botao onClick={this.botao} padding={"5px"} margem={"20px"}>Próxima Etapa</Botao>: ""}
      </Main>
        <Rodape>
          <Titulo>Rodapé</Titulo>
        </Rodape>
    </Body> 
    );
  }
  
}

export default App;
