import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        {/* BrowserRouter serve apenas para acessar as funcionalidades do Router.
        Não renderiza nenhum HTML */}
        <BrowserRouter>
          {/* Funciona como um switch do JS, são opções de rotas conforme for clicado,
          vai ser renderizado */}
          <Switch>
            {/* Abaixo são opções de rotas a serem renderizadas conforme escolha do
             usuário, com seus caminhos no path */}
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            {/* Se o switch não pegar nenhuma rota anterior, cai nesta e apresenta
             o NotFound */}
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
