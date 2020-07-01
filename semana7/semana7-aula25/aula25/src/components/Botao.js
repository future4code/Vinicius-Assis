import React from 'react';
import styled from "styled-components";

const Bot = styled.button`
background-color: black;
color: white;
`
class Botao extends React.Component{

    render(){

        return(
        <Bot onClick={this.props.clicar}>{this.props.next}</Bot>
        )

    }
}

export default Botao