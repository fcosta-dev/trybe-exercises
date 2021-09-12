import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional Filters - solicitado Requisito 03
const Filters = () => {
  const { filters: { filterByName: { name } },
    setName,
    setColumn, // Valor inicial definido no useState de "population"
    setComparison, // Valor inicial definido no useState de "maior que"
    setValue,
  } = useContext(StarWarsContext);

  // Criando o getter e o setter do localColumn e dando o valor inicial de "population"
  const [localColumn, setLocalColumn] = useState('population');
  // Criando o getter e o setter do localComparison e dando o valor inicial de "maior que"
  const [localComparison, setLocalComparison] = useState('maior que');
  // Criando o getter e o setter do localValue e dando o valor inicial de vazio ""
  const [localValue, setLocalValue] = useState('');

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
          onChange={ ({ target: { value } }) => setName(value) }
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
          onChange={ ({ target: { value } }) => setLocalColumn(value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <p />

      {/* ComboList de comparação "maior que", "menor que", "igual a" */}
      <label htmlFor="comparison-filter">
        Comparação:
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setLocalComparison(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <p />

      {/* Valor a ser definido conforme Primeira ComboList */}
      <label htmlFor="value-filter">
        Valor conforme coluna à ser filtrada:
        <input
          name="value-filter"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setLocalValue(value) }
        />
      </label>

      {/* Botão para setar o state dos filtros, quando clicar */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setColumn(localColumn);
          setComparison(localComparison);
          setValue(localValue);
        } }
      >
        Filtrar
      </button>
      <hr />
    </div>
  );
};

export default Filters;
