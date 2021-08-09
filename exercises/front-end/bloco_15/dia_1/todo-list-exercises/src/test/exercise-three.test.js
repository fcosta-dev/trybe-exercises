import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    // Desconstruo o getByTestId do componente App
    const { getByTestId } = render(<App />);
    // Guardo na variável btnRemove o elemento que contem o id de teste id-remove
    const btnRemove = getByTestId('id-remove');
    // Verifico se o elemento buscado acima foi renderizado no documento
    expect(btnRemove).toBeInTheDocument();
    // Verifico se o texto do elemento botão encontrado é "Remover"
    expect(btnRemove.value).toBe('Remover');
    // Verifica se o botão "Remover" está desativado
    expect(btnRemove.disabled).toBe(true);
  });

  test('Testando a seleção de elemento', () => {
    // PRIMEIRA PARTE -> ACESSAR OS ELEMENTOS NA TELA
    // Desconstruindo o getByLabelText, getByText, queryByText do componente App
    const { getByLabelText, getByText, queryByText } = render(<App />);
    // Busco algum elemento input text com o Label/Rótulo de "Tarefa:" 
    const inputTask = getByLabelText('Tarefa:');
    // Coloca na variável btnAdd o elemento com o texto "Adicionar"
    const btnAdd = getByText('Adicionar');
    // Coloca na variável btnRemove o elemento com o texto "Adicionar"
    const btnRemove = getByText('Remover');

    // Simulo no inputTask digitar a tarefa "Exercitar"
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } })
    // Simulo um click no botão Add após edição do campo acima com "Exercitar"
    fireEvent.click(btnAdd);
    // Simulo no inputTask digitar a tarefa "Estudar"
    fireEvent.change(inputTask, { target: { value: 'Estudar' } })
    // Simulo um click no botão Add após edição do campo acima com "Estudar"
    fireEvent.click(btnAdd);
    // Coloco na variável selectTask o elemento com o texto "Exercitar"
    const selectTask = getByText('Exercitar');
    // Verifico se o texto "Exercitar" da variável selectTask está no documento
    expect(selectTask).toBeInTheDocument();
    // Simulo um click na Task "Exercitar"
    fireEvent.click(selectTask);
    // Verifico se o botão de Remover está desativado
    expect(btnRemove.disabled).toBe(false);
    // Simulo um click no botão Remover
    fireEvent.click(btnRemove);
    // Verifico se o botão Remover está ativado
    expect(btnRemove.disabled).toBe(true);
    // Verifico se o texto "Exercitar" não está no documento, já que acima ele foi excluído com a simulação de clicar na Task e depois clicar no botão Remover 
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  })
});