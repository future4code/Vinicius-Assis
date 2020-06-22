import React from 'react';
import './App.css';
import styled from 'styled-components';
import Form1 from './components/formulario1';
import Form2 from './components/formulario2';
import Form3 from './components/formulario3';
import Fim from './components/fim';

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
      <main>
        <header>
          <h1>Cabeçalho</h1>
        </header>
          {this.paginas()}
          {this.state.Next <= 3 ? <button onClick={this.botao}>Próxima Etapa</button>: ""}
        <footer>
          <h1>Rodapé</h1>
        </footer>
      </main>
    );
  }
  
}

export default App;
