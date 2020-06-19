import React from 'react';
import './App.css';
import Post from './components/Post/Post'
import styled from "styled-components"

const Body = styled.body`
  background-color: ${props => props.body};
`
const Main = styled.main`
  background-color: ${props => props.main};
  margin: 20px;
`
const Cabecalho = styled.header`
  background-color: red;
  text-align: center;
`
const Div = styled.div`
   display: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.largura};
  margin: ${props => props.margem};
  background-color: ${props => props.cor};
`
const Input = styled.input`
  background-color: ${props => props.corDoFundo};
  color: ${props => props.corLetra};
  padding: ${props => props.adding};
  margin-top: ${props => props.margem};
`
const Rodape = styled.footer`
 background-color: blue;
 text-align: center;
`;

class App extends React.Component {
  state = {
    inputNome: "",
    inputFoto: "",
    inputPost: "",

    postagens: [
        {nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
        {nomeUsuario: "Champions",
        fotoUsuario: "https://upload.wikimedia.org/wikipedia/commons/5/52/Uefa_champions_league_logo.png",
        fotoPost: "https://live.staticflickr.com/7061/6896933019_c904df261b_b.jpg"
      },
        {nomeUsuario: "Real Madrid",
        fotoUsuario: "https://i.ebayimg.com/images/g/hGkAAOSwP2NbTLu8/s-l300.jpg",
        fotoPost: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_%281%29.jpg"
      }
    ]
  }

  clicar = ()=> {
  const obj = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFoto,
      fotoPost: this.state.inputPost,
    }
    const addObj = [...this.state.postagens, obj]
    this.setState({
      postagens: addObj
    })
  }

  onChangeNome = (event)=>{
  this.setState({
    inputNome: event.target.value
  })
  }
  onChangeFoto = (event)=>{
    this.setState({
      inputFoto: event.target.value
    })
  }
  onChangePost = (event)=>{
    this.setState({
      inputPost: event.target.value
    })
  }
  render() {
      const posts = this.state.postagens.map((postagens)=>{
        return (
          <Post
            nomeUsuario={postagens.nomeUsuario}
            fotoUsuario={postagens.fotoUsuario}
            fotoPost={postagens.fotoPost}
          />
            
          
        )
      })
      return(
        <Body body={"black"}>
           <Main main={"grey"}>
                <Div cor={"white"} margem={"40px"}>
                  <Cabecalho>
                    <h1>Olá! Eu sou um cabeçalho!</h1>
                  </Cabecalho>
                  <Div flex={"flex"} flexDirection={"column"} largura={"300px"} margem={"10px auto"}>
                    <Input corLetra={"black"} adding={"2px"} margem={"5px"}
                    value={this.state.inputNome}
                    onChange={this.onChangeNome}
                    placeholder={"Nome"}
                    />

                    <Input corLetra={"black"} adding={"10px"} margem={"5px"}
                    value={this.state.inputFoto}
                    onChange={this.onChangeFoto}
                    placeholder={"Foto"}
                    />

                    <Input  corLetra={""} adding={"10px"} margem={"5px"}
                    value={this.state.inputPost}
                    onChange={this.onChangePost}
                    placeholder={"Post"}
                    />

                    <button onClick={this.clicar}>
                      PUBLICAR
                    </button>
                  </Div>
                  
                  <div className={"app-container"}>
                    {posts}
                  </div>

                  <Rodape>
                    <h1>Olá! Eu sou um rodapé!</h1>
                  </Rodape>
                </Div>
            </Main> 
       
        </Body>
      
      )
  }
}

export default App;
