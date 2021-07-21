import React from 'react'


class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props

    return (
      <div className="pokemon">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Average weigth: <span>{averageWeight.value}</span> <span>{averageWeight.measurementUnit}</span></p>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

export default Pokemon;