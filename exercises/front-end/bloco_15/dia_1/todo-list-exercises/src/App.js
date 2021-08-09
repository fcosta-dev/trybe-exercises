import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Inicia o State com um array vazio
      listTodo: [],
    };

    // Ativa as funções criadas com o bind para serem lidas em todo o componente com o this
    this.addTodo = this.addTodo.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);
    this.removeFunc = this.removeFunc.bind(this);
  }


  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, {text: todo, select: false}] }));
  }

  onClickFunc(text) {
    const mapFunc = (element) => {
      element.select = false;
      if (element.text === text) element.select = true;
      return element
    }
    this.setState((state) => ({ listTodo: [...state.listTodo.map(mapFunc)] }));
  }

  removeFunc() {
    const reduceFunc = (cur, acc) => {
      if (acc.select) return cur
      return [...cur, acc]
    }
    this.setState((state) => ({ listTodo: [...state.listTodo.reduce(reduceFunc, [])] }));
  }

  // Inicia a renderização
  render() {
    // Desconstrói o listTodo do State
    const { listTodo } = this.state;
    const disable = !listTodo.find((element) => element.select);
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <button value="Remover" data-testid="id-remove" disabled={ disable } onClick={ this.removeFunc }>Remover</button>
        {listTodo &&
          <ul>
            {
              listTodo.map(({ text, select }, index) => (
                <li key={index + 1} onClick={ () => this.onClickFunc(text) }>
                  <Item content={ text } select={ select }/>
                </li>
              ))            
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
