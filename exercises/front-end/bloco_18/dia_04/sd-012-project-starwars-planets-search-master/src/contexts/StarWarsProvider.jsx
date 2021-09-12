// Importa o element de PropTypes.element
import { element } from 'prop-types';
// Importa os hooks useEffect e useState
import React, { useEffect, useState } from 'react';
// Importa a função que vai conexão a API de Planetas
import getPlanets from '../services/starWarsAPI';
// Importa o Contexto
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // Cria o getter e o setter do planets, passando um array vazio como estado inicial
  const [planets, setPlanets] = useState([]);

  // Equivalente ao componentDidMount, pois recebe um array vazio []
  useEffect(() => {
    // Executa a função getPlanets()
    getPlanets()
      // Se tiver dados...
      .then((items) => {
        items
          // Percorre esses dados e deleta o residents pois são links
          .forEach((item) => delete item.residents);
        // Depois dos dados trabalhados, atualiza o planets com o setter dele
        setPlanets(items);
      });
  // Recebendo um array vazio, informando que é o mesmo comportamento do componentDidMount, ou seja, executa quando a página for renderizada.
  }, []);

  return (
    // Chama o contexto, como Provider, para prover ao componente as informações necessárias, e passa a ele o valor de planetas
    <StarWarsContext.Provider value={ planets }>{ children }</StarWarsContext.Provider>
  );
};

// Faz a checagem de tipos, exigida pelo lint, se o children é um elemento
StarWarsProvider.propTypes = {
  children: element.isRequired,
};

export default StarWarsProvider;
