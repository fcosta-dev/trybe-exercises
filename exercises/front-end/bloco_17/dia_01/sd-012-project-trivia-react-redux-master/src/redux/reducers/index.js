// Importa o combineReducers do redux para fazer a junção dos reducers do app
import { combineReducers } from 'redux';

import gravatar from './gravatar';
import quiz from './quiz';
import user from './user';

const reducer = combineReducers({
  user,
  gravatar,
  quiz,
});

export default reducer;
