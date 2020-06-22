import React from "react";
import styled from "styled-components"

class Form1 extends React.Component{
    render(){
        return (
            <div>
                <h1>Informações do Ensino Superior</h1>
                <p>5. Qual o curso?</p>
                <input type="text"/>
                <p>6. Qual a unidade de ensino?</p>
            </div>
        )
    }
}

export default Form1