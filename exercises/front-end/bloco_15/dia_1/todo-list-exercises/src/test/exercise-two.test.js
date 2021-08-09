import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App';
import Item from '../Item';
import { describe } from 'yargs';
import { test } from 'picomatch';
import { ExpectationFailed } from 'http-errors';

// Limpa renderizações que foram montadas para os testes
afterEach(cleanup)

describe('Teste do campo input', () => {
  test('Testando a adição de vários itens à aplicação', () => {
    // PRIMEIRA PARTE -> ACESSAR OS ELEMENTOS NA TELA
    const listTodo
  })
})

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    // Desconstruo o getByText do componente Item passando a props "content" a string "Todo test".
    const { getByText } = render(<Item content="testando passagem da props" />);

    // Verifico se o texto "testando passagem da props" aparece renderizado na tela.
    expect(getByText('testando passagem da props')).toBeInTheDocument();
  })
})
