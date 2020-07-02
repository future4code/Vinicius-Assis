import React from "react";
import styled from "styled-components"

const Titulo = styled.h1`
margin: 0;
margin-top: 2%;
`
const Div = styled.div`
margin-top: 2%;
`
class Form1 extends React.Component{
    render(){
        return (
            <div>
                <Titulo>Informações do Ensino Superior</Titulo>
                <p>5. Qual o curso?</p>
                <input type="text"/>
                <p>6. Qual a unidade de ensino?</p>
            </div>
        )
    }
}

export default Form1