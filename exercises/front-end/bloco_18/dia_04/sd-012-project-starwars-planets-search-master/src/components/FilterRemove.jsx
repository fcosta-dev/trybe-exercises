import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

// Cria o componente funcional - Requisito 05
const FilterRemove = () => {
  const {
    filters: { filterByNumericValues },
    setUnavailableFilters,
    unavailableFilters,
    setFiltersByNumericValues,
  } = useContext(StarWarsContext);

  return (
    <>
      {
        filterByNumericValues
          .map(({ column, comparison, value }, index) => (
            <div key={ index } data-testid="filter">
              <span>
                {`${column} ${comparison} ${value} `}
              </span>
              <button
                type="button"
                onClick={ () => {
                  setFiltersByNumericValues(filterByNumericValues
                    .filter((filter) => filter.column !== column));
                  setUnavailableFilters(unavailableFilters
                    .filter((filter) => filter !== column));
                } }
              >
                {/* Button com ícone de x em cada filtro de valores numéricos */}
                x
              </button>
            </div>
          ))
      }
    </>);
};

export default FilterRemove;
