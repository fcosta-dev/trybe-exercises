import { combineReducers } from 'redux';
import myReducer from './myReducer';

// O método combineReducers que, como diz seu nome, combina reducers , deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.
// Dica: Mesmo que tenhamos apenas um reducer é uma boa prática que utilizemos o combineReducers , pois caso nossa aplicação cresça e necessite de mais de um reducer não será necessário alterar sua lógica.
const rootReducer = combineReducers({ myReducer });

export default rootReducer;
