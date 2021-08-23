import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Importa a Store
import store from './redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    {/* O Provider vai fornecer os estados à todos os componentes encapsulados */}
    {/* index.js precisa importar Provider e store para encapsular o <App /> */}
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
