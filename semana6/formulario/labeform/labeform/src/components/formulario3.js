import React from "react";
import styled from "styled-components"

class Form3 extends React.Component{
    render(){
        return (
            <div>
                <h1>Etapa 3 - Informações Gerai de Ensino</h1>
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