// Importa o element de PropTypes.element
import { oneOfType, arrayOf, element } from 'prop-types';
// Importa os hooks useEffect e useState
import React, { useEffect, useState } from 'react';
// Importa a função que vai conexão a API de Planetas
import getPlanets from '../services/starWarsAPI';
// Importa o Contexto
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // Cria o getter e o setter do planets, passando um array vazio como estado inicial
  const [planets, setPlanets] = useState([]);
  // Cria o getter e o setter do Name(filtro a ser realizado), passando um valor vazio como estado inicial
  const [name, setName] = useState('');
  // Cria o getter e o setter do filtersByNumericValues, passando o valor vazio '' como estado inicial
  const [filtersByNumericValues, setFiltersByNumericValues] = useState([]);

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

  // Estrutura do name solicitada pelo Requisito 02
  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filtersByNumericValues,
    },
  };

  return (
    // Chama o contexto, como Provider, para prover ao componente as informações necessárias, e passa a ele o value, com os planetas, filtros e filtro definido
    <StarWarsContext.Provider
      value={
        { planets, ...filters, setName, setFiltersByNumericValues }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
};

// Faz a checagem de tipos, exigida pelo lint
StarWarsProvider.propTypes = {
  children: oneOfType([
    arrayOf(element),
    element,
  ]).isRequired,
};

export default StarWarsProvider;
