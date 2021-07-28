import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter> {/* Serve apenas para acessar as funcionalidades do Router. Não renderiza nenhum HTML. */}
        <Header />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
