import React from "react";
import styled from "styled-components"

const Titulo = styled.h1`
margin: 0;
margin-top: 2%;
`
const Div = styled.div`
margin-top: 2%;
`
class Form3 extends React.Component{
    render(){
        return (
            <div>
                <Titulo>Etapa 3 - Informações Gerai de Ensino</Titulo>
                <p>5. Por que você não terminou o curso?</p>
                <input type="text"/>
                <p>6. Você fez algum curso complementar?</p>
    
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
            </div>
        )
    }
}

export default Form3