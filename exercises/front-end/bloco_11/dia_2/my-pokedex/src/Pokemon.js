// RESUMÃO
// Puxa 
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    // recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações
    const { pokemon: { name, type, averageWeight, image } } = this.props; // Faz a desestruturação apenas para fazer a chamada dos dados dos objetos

    // Renderizamos abaixo a props pokemon que foi desestruturada
    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;