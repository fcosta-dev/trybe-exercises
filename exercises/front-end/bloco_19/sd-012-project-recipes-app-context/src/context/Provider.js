import React, { useState } from 'react';

import Context from './Context';

// A function Provider já recebe a props como padrão, e aqui abaixo estamos recebendo ela e desconstruindo pegando o children
function Provider({ children }) {
  // Cria o getter e setter do teste e passa seu valor inicial como "oi"
  const [teste, setTeste] = useState('oi');

  // O value que será passado ao APP pelo provider, será apenas o "teste" que tem o seu valor inicial "oi" setado acima
  const value = { teste };

  return (
    // Habilita o Context.Provider para prover aos componentes as informações que estão dentro de value={}
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

// Exporta o Provider para ser usado no src/index.js
export default Provider;
