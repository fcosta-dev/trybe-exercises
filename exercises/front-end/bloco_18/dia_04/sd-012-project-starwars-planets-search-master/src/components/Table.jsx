// Importando o hook useContext do react
import React, { useContext } from 'react';
// Importa o contexto criado para esse projeto StarWars
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional
const Table = () => {
  // Salva na variável planets os planetas vindo da API em /services
  const {
    planets,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  // Essa variável headers vai receber a primeira linha do planets(conforme [0]) e se não tiver nada, ela traz um array vazio, evitando undefined.
  const headers = planets[0] || [];

  // A função evaluate recebe 3 parametros
  // Parametro 01: planetColumn(combolist population, etc)
  // Parametro 02: eValue(valor a ser informado conforme combolist)
  // Parametro 03: eComparison(maior que, menor que, etc)
  const evaluate = (planetColumn, eValue, eComparison) => {
    if (Number.isNaN(planetColumn) || Number.isNaN(eValue)) return false;

    planetColumn = parseInt(planetColumn, 10);
    eValue = parseInt(eValue, 10);

    switch (eComparison) {
    case 'maior que':
      return planetColumn > eValue;

    case 'menor que':
      return planetColumn < eValue;

    case 'igual a':
      return planetColumn === eValue;

    default:
      return true;
    }
  };

  // Monta a tabela
  return (
    <table>
      {/* Aqui vai montar o CABEÇALHO da tabela */}
      <thead>
        <tr>
          {/* Faz um map, nas keys/chaves do headers montando o cabeçalho da tabela */}
          {
            Object.keys(headers)
              .map((header, index) => (
                <th key={ index }>{header}</th>
              ))
          }
        </tr>
      </thead>
      {/* Aqui vai montar o CORPO da tabela com os dados dos planetas */}
      <tbody>
        {
          filterByNumericValues
            .reduce((acumulador, { column, value, comparison }) => acumulador
              // Aciono o filtro conforme planet[column](combolist population, etc), value(valor a ser informado conforme combolist), comparison(maior que, menor que, etc)
              .filter((planet) => evaluate(planet[column], value, comparison)), planets)
            .filter((planet) => (planet.name).includes(name))
          // Percorre a variável planets com o array recebido, montando cada linha da tabela(ou <tr>) pegando somente os values, pois as keys/chaves não são necessárias
            .map((planet, index) => (
              <tr key={ index }>
                {/* Pega somente os valores para montar a coluna correspondente */}
                {
                  Object.values(planet)
                    .map((info) => <td key={ info }>{ info }</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;
