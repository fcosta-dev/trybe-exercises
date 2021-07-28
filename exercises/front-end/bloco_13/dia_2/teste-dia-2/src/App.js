import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter> {/* BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação. */}
        <nav>
          <ul>
            {/* Link é o componente a ser usado no lugar de elementos com a tag a , de forma a disponibilizar navegação por URL na sua aplicação SPA sem o recarregamento de página que a tag a exige */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>
        {/* O componente Switch é usado para encapsular um conjunto de rotas que você definiu via Route */}
        <Switch> {/* Rotas encapsuladas no Switch ordenadas do mais específico para o mais genérico, começando de cima, pois o switch procura de cima para baixo pelo primeiro Route que possui correspondencia entre seu caminho definido na prop path do componente e a URL atual da aplicação */}
          {/* A rota abaixo renderiza User porem faz uso de parametro de URL */}
          {/* A render de Route é usada quando é necessário passar informações adicionais via props para o componente a ser mapeado */}
          <Route
            exact
            path="/users/:id" //* Passa ao componente a chave id dentro de match
            render={ (props) => <Users {...props} greetingsMessage="Good Morning para Todos" /> } // O ...props, vai passar todas as informações do Route, como history[histórico de paginas por onde passei], location e o match[que é para passar parametro pela URL]
          /> {/* Estou passando para ele a prop greetingMessage com o valor igual a "Good Morning para Todos". */}
          {/* Renderiza o strict-access, passando para a prop user diferentes valores para username e password */}
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username: 'joao', password: '1234' } } /> // Envio para o componente StrictAccess a props user
            )}
          />          
          {/* A rota abaixo renderiza o About */}
          {/* Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando */}
          <Route exact path="/about" component={ About }/> {/* Lê-se que, se houver uma correspondência exata entre o caminho da URL atual e o caminho /about declarado em Route, o componente será renderizado */}
          {/* A rota abaixo renderiza o Home */}
          <Route exact path="/" component={ Home }/> {/* Route estabelece o mapeamento entre o caminho de URL declarado com o componente */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
