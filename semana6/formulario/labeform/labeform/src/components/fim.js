import React from "react";
import styled from "styled-components"

const Titulo = styled.h1`
margin: 0;
margin-top: 2%;
`
const Div = styled.div`
margin-top: 2%;
`
class Fim extends React.Component{
    render(){
        return (
            <div>
                <Titulo>O formulário Acabou</Titulo>
                <p>Muito Obrigado por participar! Entraremos em contato!</p>
            </div>
        )
    }
}

export default Fim