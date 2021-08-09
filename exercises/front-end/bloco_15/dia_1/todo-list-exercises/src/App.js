import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
    };

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

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} />
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
