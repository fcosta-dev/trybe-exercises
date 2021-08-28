// importo a createStore para realizar a criação da store e a applyMiddleware para receber o thunk
import { createStore, applyMiddleware } from 'redux';

// Necessário importar o thunk para trabalhar com as APIs
import thunk from 'redux-thunk';
// Importa extensão de configuração do devtools
import { composeWithDevTools } from 'redux-devtools-extension';
// importo do rootReducer que é a combinação dos dois reducers do projeto
import rootReducer from '../reducers';

// Crio a store vinculando ao rootReducer, configurando o devtools extension para acompanhar os passos do redux e também o thunk para realizar interceptações
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
