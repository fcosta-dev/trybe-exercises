import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'
import expectExport from 'expect';

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o elemento contém o texto "Adicionar"', () => {
    // PRIMEIRO PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Desconstruo o getByText do App renderizado
    const { getByText } = render(<App />);
    // Verifico se há o texto Adicionar no componente e guarda este elemento.
    const button = getByText('Adicionar');
    
    // PRIMEIRO PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // PRIMEIRO PARTE -> ACESSAR OS ELEMENTOS NA TELA        
    // Verifica se o elemento aguardado na variável button está no Documento.
    expect(button).toBeInTheDocument();
  });

  
  test('Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista', () => {
    // PRIMEIRO PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Desconstroi o getbyLabelText e o getByText do componente App
    const { getbyLabelText, getByText } = render(<App />);
    // Coloca na variável button o elemento que tem o texto "Adicionar"
    const button = getByText('Adicionar');
    // Busca algum elemento Label com o texto "Tarefa:"
    const input = getByLabelText('Tarefa:');



  })
})