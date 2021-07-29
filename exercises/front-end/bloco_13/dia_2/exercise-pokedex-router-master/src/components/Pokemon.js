import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { pokemonType } from '../types';

import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: {
        averageWeight: {
          measurementUnit,
          value,
        },
        id,
        image,
        name,
        type,
      },
      showDetailsLink,
      isFavorite,
    } = this.props;

    return (
      <div className="pokemon">
        <div className="pokemon-overview">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${value} ${measurementUnit}`}
          </p>
          {showDetailsLink && <Link to={`pokemons/${id}`}> More details </Link>}
        </div>
        <img src={image} alt={`${name} sprite`} />
        {isFavorite && (
          <img
            className="favorite-icon"
            src="/star-icon.svg"
            alt={`${name} is marked as favorite`}
          />
        )}
      </div>
    );
  }
}

Pokemon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

Pokemon.defaultProps = {
  showDetailsLink: true,
};

export default Pokemon;
