import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    const { getByTestId } = render(<App />);
    const btnRemove = getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove.value).toBe('Remover');
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

    // SEGUNDA PARTE -> INTERAGIR COM OS ELEMENTOS NA TELA
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
    // Verifico se o texto "Exercitar" está no documento
    expect(selectTask).toBeInTheDocument();
    fireEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    fireEvent.click(btnRemove);
    expect(btnRemove.disabled).toBe(true);
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  })
});