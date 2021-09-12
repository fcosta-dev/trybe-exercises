// Importando o hook useContext do react
import React, { useContext } from 'react';
// Importa o contexto criado para esse projeto StarWars
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional
const Table = () => {
  // Salva na variável planets os planetas vindo da API em /services
  const { planets, filters: { filtersByName: { name } } } = useContext(StarWarsContext);
  // Essa variável headers vai receber a primeira linha do planets(conforme [0]) e se não tiver nada, ela traz um array vazio, evitando undefined.
  const headers = planets[0] || [];

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
          planets
            // Realiza o filtro conforme "name" que é o valor digitado analisado no FilterInput.jsx
            .filter((planet) => (name ? (planet.name).includes(name) : true))
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
