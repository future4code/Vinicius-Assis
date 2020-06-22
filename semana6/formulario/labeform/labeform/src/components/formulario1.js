import React from "react";
import styled from "styled-components"

class Form2 extends React.Component{
    render(){
        return (
            <div>
                <h1>Etapa 1-Dados Gerais</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text"/>
                <p>2. Qual a sua idade?</p>
                <input type="number"/>
                <p>3. Qual o seu email?</p>
                <input type="email"/>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option></option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superio Incompleto</option>
                    <option>Ensino Superior</option>
                </select>
            </div>
        )
    }
}

export default Form2