import React from "react";
import styled from "styled-components"

const Titulo = styled.h1`
margin: 0;
margin-top: 2%;
`
const Div = styled.div`
margin-top: 2%;
`
const Opcao = styled.option`
background-color: black;
color: white;
`
const Linha = styled.hr`
background-color: white;
`
class Form2 extends React.Component{
    render(){
        return (
            <Div>
                <Titulo>Etapa 1-Dados Gerais</Titulo>
                <p>1. Qual o seu nome?</p>
                <input type="text"/>
                <p>2. Qual a sua idade?</p>
                <input type="number"/>
                <p>3. Qual o seu email?</p>
                <input type="email"/>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <Opcao></Opcao>
                    <Linha/>
                    <Opcao>Ensino Médio Incompleto</Opcao>
                    <Linha/>
                    <Opcao>Ensino Médio Completo</Opcao>
                    <Linha/>
                    <Opcao>Ensino Superio Incompleto</Opcao>
                    <Linha/>
                    <Opcao>Ensino Superior</Opcao>
                </select>
            </Div>
        )
    }
}

export default Form2