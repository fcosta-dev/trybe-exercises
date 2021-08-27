import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importa as páginas oficiais do projeto, Login e Wallet
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
