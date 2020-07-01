import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Caixa = styled.div`
border: 1px solid black;
text-align: center;
padding: 50px;
width: 50vh;
margin-left: 550px;
`
const axiosConfig = {
    headers: {
        Authorization: "vinicius-fredeanelle-turing"
    }
}
const myUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class Registro extends React.Component{
    state={
        nome: "",
        email: "",
    }

    valorNome = (event)=>{
        this.setState({
            nome: event.target.value
        })
    }
    valorEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }


    botSalva = ()=>{
       const body = {
           name: this.state.nome,
           email: this.state.email,
       }

        axios
            .post(
                myUrl, 
                body, 
                axiosConfig,
            )
            .then(()=>{
                alert("Usuário criado com sucesso!")
                this.setState({nome: "", email: ""})
            })
            .catch(error =>{
                console.log(error.message)
            })
        }
        

    render(){

        return(
            <div>
                <div>
     
                </div>
                <Caixa>
                    <div>
                        <label>Nome:</label>
                        <input type="text" placeholder="Nome Usuário" value={this.state.nome} onChange={this.valorNome}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email"  placeholder="Email do Usuário" value={this.state.email} onChange={this.valorEmail}/>
                    </div>
                    <button onClick={this.botSalva}>Salvar</button>
                </Caixa>
            </div>
        )
    }

}

export default Registro