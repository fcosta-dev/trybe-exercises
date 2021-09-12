// importa o hook useContext
import React, { useContext } from 'react';
// Importa o context
import StarWarsContext from '../contexts/StarWarsContext';

// Criando um componente Funcional para Realização do filtro do requisito 02
const FilterInput = () => {
  // Desconstrói a estrutura filters/filtersByName/name criada no StarWarsPRovider, a pedido do requisito 02
  const { filters: { filtersByName: { name } }, setName } = useContext(StarWarsContext);

  return (
    <input
      value={ name }
      data-testid="name-filter"
      // Quando digitar algo, o valor é setado no Name para que o filtro seja trabalhado
      onChange={ ({ target: { value } }) => setName(value) }
    />
  );
};

export default FilterInput;
