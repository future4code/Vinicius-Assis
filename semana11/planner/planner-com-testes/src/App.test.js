import React from "react";
import axios from "axios";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import  App from "./App"

axios.get = jest.fn().mockResolvedValue([
    {
        "text": "Lavar a louça",
        "day": "Segunda",
        "id": "yGuE11cmKquF1nahEzsr"
    }
])
axios.post = jest.fn().mockResolvedValue()

const url = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-vinicius-fredeanelle";

describe("Criação de Tarefas", ()=>{
    test("Input existe na tela", ()=>{
        const{getByPlaceholderText}= render(<App/>)

        const input = getByPlaceholderText("Criar Tarefa")

        expect(input).toBeInTheDocument()
    })

    test("Botao existe na tela", ()=>{
        const {getByText}= render (<App/>)

        expect(getByText(/Adicionar/)).toBeInTheDocument()
    })
    
    test("Testando se a API está sendo chamada", ()=>{
        const {getByText} = render(<App/>)
        expect(axios.get).toHaveBeenCalled()
    
    })
    
    // test("Testando se texto de API está sendo renderizado na tela", ()=>{
    //   const {getByText} = render(<App/>)
    
    //   const tarefa = getByText(/Lavar a louça/i)
    
    //   expect(tarefa).toBeInTheDocument()
    // })
})

