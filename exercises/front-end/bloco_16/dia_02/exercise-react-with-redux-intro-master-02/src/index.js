import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

ReactDOM.render(
  <React.StrictMode>
  {/* O Provider vai fornecer os estados à todos os componentes encapsulados */}
  {/* index.js precisa importar Provider e store para encapsular o <App /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);