import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/comidas" component={ Comidas } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
