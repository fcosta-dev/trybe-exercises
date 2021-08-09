import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'

// Limpa renderizações que foram montadas para os testes
afterEach(cleanup)

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o elemento contém o texto "Adicionar"', () => {
    // PRIMEIRA PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Desconstruo o getByText do App renderizado
    const { getByText } = render(<App />);
    // Verifico se há o texto Adicionar no componente e guarda este elemento.
    const button = getByText('Adicionar');
    
    // SEGUNDA PARTE -> INTERAGIR COM OS ELEMENTOS NA TELA

    // TERCEIRA PARTE -> FAZER O TESTE        
    // Verifica se o elemento aguardado na variável button está no Documento.
    expect(button).toBeInTheDocument();
  });

  
  test('Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista', () => {
    // PRIMEIRA PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Desconstroi o getbyLabelText e o getByText do componente App
    const { getByLabelText, getByText } = render(<App />);
    // Coloca na variável button o elemento que tem o texto "Adicionar"
    const button = getByText('Adicionar');
    // Busca algum elemento com o Label "Tarefa:", a linha abaixo vai pegar o input deste Label
    const input = getByLabelText('Tarefa:');

    // SEGUNDA PARTE -> INTERAGIR COM OS ELEMENTOS NA TELA
    // Simulando eu podendo escrever no campo texto 'teste no campo
    fireEvent.change(input, { target: { value: 'teste no campo'} })
    // Simulo o evento de clicar no elemento button
    fireEvent.click(button);

    // TERCEIRA PARTE -> FAZER O TESTE
    // Eu espero que o texto 'teste no campo' esteja renderizado.
    expect(getByText('teste no campo')).toBeInTheDocument();
  });
});
