import React from 'react';
// importe o connect do 'react-redux';
import { connect } from 'react-redux';

import propTypes from 'prop-types';

class PersonagemInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { loading, personagem, error } = this.props;

    if (!loading && personagem) {
      return (
        <ul>
          <li>Nome: {personagem.name}</li>
          <li>Genero: {personagem.gender}</li>
          <li>Aliases: {personagem.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Livros: {personagem.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (
  { personagemReducer: { loading, personagem, error } }
  ) => ({ loading, personagem, error });

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(PersonagemInfo);

//faça as propTypes
PersonagemInfo.propTypes = {
  importedThunk: propTypes.func.isRequired,
};
