import React from 'react';

// Importa Switch e Route com a finalidade de montar as rotas
import { Switch, Route } from 'react-router-dom';

// Importa as pages de Login e Wallet para serem destinadas nas rotas abaixo
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </main>
  );
}

export default App;
