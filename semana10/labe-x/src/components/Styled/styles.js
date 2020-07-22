import styled from "styled-components"

export const Body = styled.body`
margin: 0;
padding: 0;
height: 100vh;
`
export const But = styled.button`
    background-color: ${props => props.cor};
    display: ${props => props.display};
`