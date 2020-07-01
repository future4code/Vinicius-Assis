import React from 'react';
import styled from "styled-components";
import Botao from "./Botao";
import App from "../App";

const Caixa = styled.div`
border: 1px solid black;
text-align: center;
padding: 50px;
width: 50vh;
margin-left: 550px;
`


class Registro extends React.Component{
    state={
        Registro:[],
        nome: "",
        email: "",
    }
    render(){

        return(
            <div>
                <div>
                
                </div>
                <Caixa>
                    <div>
                        <label>Nome:</label>
                        <input value={this.state.nome}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input value={this.state.email}/>
                    </div>
                    <button>Salvar</button>
                </Caixa>
            </div>
        )
    }

}

export default Registro