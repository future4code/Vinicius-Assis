import styled from "styled-components"

export const Body = styled.body`
margin: 0;
padding: 0;
height: 100vh;
`
export const Main = styled.main`
margin: 0;
padding: 0;
height: 86vh;
whidth: 100vw;
`
export const But = styled.button`
    background-color: ${props => props.cor};
    display: ${props => props.display};
`