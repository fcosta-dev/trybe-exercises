// Vamos usar a função renderWithRouter que é uma função helper ou assistente. Uma função helper executa uma tarefa específica e não depende de outras funções.
// No nosso caso, a helper irá criar um histórico e renderizar o componente que iremos testar. Para não ficarmos sem contexto de onde essa função veio, ela foi tirada da documentação oficial da Testing Library

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

// Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.
const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

export default renderWithRouter;
