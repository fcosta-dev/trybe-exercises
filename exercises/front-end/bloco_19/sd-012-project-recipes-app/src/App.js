import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ExplorarBebidas from './components/ExplorarBebidas';
import ExplorarComidas from './components/ExplorarComidas';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Provider from './context/Provider';

// Importação de pages
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import Detalhes from './pages/Detalhes';
import Explorar from './pages/Explorar';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import DetalhesInProgress from './pages/DetalhesInProgress';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/comidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/bebidas/:id" component={ Detalhes } />
        <Route exact path="/comidas/:id/in-progress" component={ DetalhesInProgress } />
        <Route exact path="/bebidas/:id/in-progress" component={ DetalhesInProgress } />
      </Switch>
    </Provider>
  );
}

export default App;

// Requisitos 01 => test_coverage_spec.js
// Requisitos 02-08 => login_spec.js
// Requisitos 09-12 => header_spec.js
// Requisitos 13-18 => header_search_bar_spec.js
// Requisitos 19-24 => footer_spec.js
// Requisitos 25-32 => recipes_list_spec.js
// Requisitos 33-46 => recipe_detail_spec.js
// Requisitos 47-53 => recipe_in_progress_spec.js

// Requisitos 82-87 =>profile_spec.js