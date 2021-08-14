import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App';
import Item from '../Item';

// Limpa renderizações que foram montadas para os testes
afterEach(cleanup)

describe('Teste do campo input', () => {
  test('Testando a adição de vários itens à aplicação', () => {
    // PRIMEIRA PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Criando um array de tarefas
    const arrayTarefas = ['Acordar', 'Escovar os dentes', 'Tomar café']
    // Desconstruo o getByLabelText e o getByText do componente App
    const { getByLabelText, getByText } = render(<App />)
    // Busco algum elemento com o Label "Tarefa:", a linha abaixo vai pegar o input com esse label
    const input = getByLabelText('Tarefa:');
    const button = getByText('Adicionar');

    // SEGUNDA PARTE -> INTERAGIR COM OS ELEMENTOS
    // Percorro todo o array de Tarefas para simular digitação e click no botão adicionar
    arrayTarefas.forEach((tarefa) => {
      // Simulo o digitar a tarefa percorrida no ForEach no campo input de texto 
      fireEvent.change(input, { target: { value: tarefa } });
      // Simulo o click no botão para adicionar a tarefa acima percorrida pelo ForEach
      fireEvent.click(button);
    })

    // TERCEIRA PARTE -> FAZ O TESTE
    // Percorro mais uma vez o array de Tarefas para verificar se cada tarefa está renderizada
    arrayTarefas.forEach((tarefa) => {
      // Faço o teste analizando se a tarefa está renderizada no documento 
      expect(getByText(tarefa)).toBeInTheDocument();
    })
  });
})

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    // Desconstruo o getByText do componente Item passando a props "content" a string "Todo test".
    const { getByText } = render(<Item content="testando passagem da props" />);

    // Verifico se o texto "testando passagem da props" aparece renderizado na tela.
    expect(getByText('testando passagem da props')).toBeInTheDocument();
  })
})
