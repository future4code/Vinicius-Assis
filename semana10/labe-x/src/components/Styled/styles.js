import styled from "styled-components"

export const Body = styled.body`
margin: 0;
padding: 0;
height: 100vh;
display: grid;
grid-template-rows: 8vh 84vh 8vh; 
`
export const Main = styled.main`
grid-row: 2/3;
margin: 0;
padding: 0;
height: 100%;
border: ${props => props.borda};
display: ${props => props.display};
grid-template-columns: ${props => props.coluna};
grid-template-rows: ${props => props.linha};
`
export const But = styled.button`
    font-weight: bold;
    font-size: ${props => props.fonte};
    border: none;
    border-radius: ${props => props.radius};
    cursor: pointer;
    outline:none;
    background-color: ${props => props.background};
    display: ${props => props.display};
    padding: ${props => props.padding};
    margin: ${props => props.margem};
    height: ${props => props.altura};
    width: ${props => props.cumprimento};
    color: ${props => props.cor};
    :hover{
        background-color: ${props => props.hover};
        color: black;
    }
`

export const H3 = styled.h3`
    margin: 0;
    padding: 0;
    color: ${props => props.cor};
`