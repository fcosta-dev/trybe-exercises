// Importa o useState
import { useState } from 'react';

function useArray() {
  // Cria o getter e o setter do Todos, com valor inicial de array vazio
  const [todos, setTodos] = useState([]);

  // a função addTodos recebe um parametro no qual será concatenado ao array principal todos
  const addTodos = (userInput) => {
    setTodos(todos.concat(userInput));
  };

  // Retorna para quem chamar o todos e o addTodos
  return {
    todos,
    addTodos,
  };
}

export default useArray;
