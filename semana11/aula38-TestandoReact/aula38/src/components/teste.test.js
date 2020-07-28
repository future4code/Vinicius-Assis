import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "./Post";

test("O usuário deve poder criar um novo post. Para isso, ele deve digitar no input cujo placeholder é "Novo post", e clicar no botão "Adicionar". Quando ele faz isso, um novo item é adicionado à lista de posts.", () => {
    // preparação
    const { getByText } = render(<Post />);
  
    const botaoSomar = getByText(/Soma/i);
  
    // execução
    fireEvent.click(botaoSomar);
  
    // verificação
    let contadorTexto = getByText(/Contador/i);
  
    expect(contadorTexto).toHaveTextContent("Contador: 1");
  
    fireEvent.click(botaoSomar);
    fireEvent.click(botaoSomar);
  
    contadorTexto = getByText(/Contador/i);
  
    expect(contadorTexto).toHaveTextContent("Contador: 3");
  });