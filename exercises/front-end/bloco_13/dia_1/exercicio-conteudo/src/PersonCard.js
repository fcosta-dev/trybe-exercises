// PersonCard.js
import React, { Component } from 'react';

// Esse componente recebe as props passadas do PersonDetails.
class PersonCard extends Component {
  render() {
    // Desestruturamos nossas props e trazemos elas dentro das tags HTML,
    // para que sejam renderizadas.
    const { person: { name, email, age, image } } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default PersonCard;
