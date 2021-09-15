import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional Filters - solicitado Requisito 03
const Filters = () => {
  const { filters: {
    filterByName: { name },
    filterByNumericValues,
  },
  setName,
  setFiltersByNumericValues,
  setUnavailableFilters,
  unavailableFilters,
  } = useContext(StarWarsContext);

  // Cria um array com as opções do ComboList
  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];
  // Cria um array com as comparações do ComboList
  const comparisons = ['maior que', 'menor que', 'igual a'];

  // Criando o getter e o setter do localColumn e dando o valor inicial de "population"
  const [column, setColumn] = useState(columns[0]);
  // Criando o getter e o setter do localComparison e dando o valor inicial de "maior que"
  const [comparison, setComparison] = useState(comparisons[0]);
  // Criando o getter e o setter do localValue e dando o valor inicial de vazio ""
  const [value, setValue] = useState('');

  return (
    <div>
      <hr />
      <h3>Filtro de Dados:</h3>
      <label htmlFor="name">
        Nome do Planeta:
        <input
          name="name"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target: { value: valor } }) => setName(valor) }
        />
      </label>
      <p />

      {/* ComboList population, orbital_period, diameter, rotation_period
       e surface_water */}
      <label htmlFor="column-filter">
        Coluna de filtro:
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ ({ target: { value: valor } }) => setColumn(valor) }
        >
          {/* Como há a exclusão de dados que estão participando de filtros, então foi
          realizado um filters e map para montagem da ComboList */}
          {/* Faz um filtro se o elemento não está incluso nos Filtros,
           controlado pelo unavailableFilters */}
          {
            columns
              .filter((coluna) => !unavailableFilters.includes(coluna))
              .filter((coluna) => !unavailableFilters.includes(coluna))
              .map((coluna, index) => (
                <option value={ coluna } key={ index }>{ coluna }</option>
              ))
          }
        </select>
      </label>
      <p />

      {/* ComboList de comparação "maior que", "menor que", "igual a" */}
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target: { value: valor } }) => setComparison(valor) }
        >
          {/* Como há a exclusão de dados que estão participando de filtros, então foi
          realizado um filters e map para montagem da ComboList */}
          {
            comparisons
              .map((comparacao, index) => (
                <option value={ comparacao } key={ index }>{comparacao}</option>
              ))
          }
        </select>
      </label>
      <p />

      {/* Valor a ser definido conforme Primeira ComboList */}
      <label htmlFor="value-filter">
        Valor conforme coluna à ser filtrada:
        <input
          name="value-filter"
          data-testid="value-filter"
          onChange={ ({ target: { value: valor } }) => setValue(valor) }
        />
      </label>

      {/* Botão para setar o state dos filtros, quando clicar */}
      <button
        type="button"
        data-testid="button-filter"
        disabled={ !value }
        onClick={ () => {
          // Atualiza o FiltersByNumericValues com os valores do novo filtro
          setFiltersByNumericValues(
            [...filterByNumericValues, { column, comparison, value }],
          );
          // Adiciona no array unavailableFilters a coluna que não pode ser usada
          unavailableFilters.push(column);
          // Adiciona ao state esse dado citado acima
          setUnavailableFilters([...unavailableFilters]);

          setColumn(columns.filter((c) => !unavailableFilters.includes(c))[0]);
        } }
      >
        Filtrar
      </button>
      <hr />
    </div>
  );
};

export default Filters;
