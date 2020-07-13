import React from 'react';
import styled from "styled-components";
import Registro from "./Registro";
import axios from "axios";

const Deletar = styled.button`
color: red;
background-color: white;
border: none;
`
const axiosConfig = {
    headers: {
        Authorization: "vinicius-fredeanelle-turing"
    }
}
const myUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class ListaRegistro extends React.Component{
    state={
        Registros:[],
    }

    componentDidMount = ()=>{
        this.getAllUsers()
    }

    getAllUsers = ()=>{
        axios
            .get(
                myUrl, 
                axiosConfig
            )
            .then(response=>{
                this.setState({Registros: response.data})
            }).catch(err => {
                console.log(err.message)
            })
        }

    deletUsuario = (usuarioid)=>{
        axios
            .delete(
                `${myUrl}/${usuarioid}`,
                axiosConfig,
            )
            .then(()=>{
                this.getAllUsers()
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    render(){

        return(
            <ul>
                {this.state.Registros.length === 0 && <div>Carregando...</div>}
                {this.state.Registros.map(usuario =>{
                    return <li key={usuario.id}>
                        {usuario.name} 
                        <Deletar onClick={() => {this.deletUsuario(usuario.id)}}>X</Deletar>
                        </li>
                })}
            </ul>
        )
    }

}

export default ListaRegistro