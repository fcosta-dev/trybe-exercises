import React from 'react'
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { lista } = this.props

    return (
      <div>
        <h1>mensagem do Pokedex</h1>
        {lista.map((elemento) => <Pokemon pokemon={elemento}/>)}
      </div>
    )
  }
}

export default Pokedex;