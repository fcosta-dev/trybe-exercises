// src/App.js
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </Provider>
);

export default App;
