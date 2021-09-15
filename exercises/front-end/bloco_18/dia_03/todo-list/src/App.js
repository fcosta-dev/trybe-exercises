import React, { useState } from 'react';
import TodoList from './TodoList';
import useArray from './hooks/useArray';

function App() {
  // Cria o getter e setter do New Input com valor inicial em branco
  const [newInput, setNewInput] = useState('');
  // Lista de tarefas
  const { addTodos, todos } = useArray();

  // Seta o novo valor de input(setNewInput) como o valor que está no target
  // Função irá rodar no onChange do "Add a task:"
  const handleInput = ({ target }) => {
    setNewInput(target.value);
  };

  // Quando o botão Add for clicado..
  const handleClick = () => {
    // Chama a fução addTodos do hooks passando a nova tarefa como parametro
    // Isso vai concatena-la às demais tarefas gravas no array  
    addTodos(newInput);
    // Seta que o setNewInput agora é vazio
    setNewInput('');
  };

  return (
    <div>
      <label htmlFor="task-input">
        Add a task:
        <input
          id="task-input"
          placeholder="task"
          name="newItem"
          value={ newInput }
          onChange={ handleInput }
        />
      </label>
      <button type="button" onClick={ () => handleClick() }>Add</button>
      {/* Chama o componente TodoList passando a tasks como props */}
      <TodoList tasks={ todos } />
    </div>
  );
}

export default App;