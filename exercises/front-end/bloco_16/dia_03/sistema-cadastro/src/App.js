import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Clients from './components/Clients';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/clients" component={ Clients } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
