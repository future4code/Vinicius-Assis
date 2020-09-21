import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

  test("O usuário deve poder criar um novo post.", () => {
    // preparação
    const {getByPlaceholderText, getByText} = render(<App/>);
    
    const digita = getByPlaceholderText(/Novo post/i);

    const botaoPostar = getByText(/Adicionar/i);
  
    // execução

    fireEvent.change(digita, {
      target:{
        value: "post"
      }
    })

    fireEvent.click(botaoPostar);
    // verificação
  
  
    expect(getByText("post")).toBeInTheDocument();
  
  });
