import React, { useContext } from 'react';
import { drinks, desserts, dishes } from '../data';
import MyContext from '../context/MyContext';

function Options() {
  const { handleChange, updateCart, orderList } = useContext(MyContext);
  const { comida, bebida, sobremesa } = orderList;
  const roundingOption = 2;
  const start = 0;

  const renderOptionType = (data, meal, mealType) => data.map((item) => {
    const { name, source, price } = item;
    const aux = meal
      .find((e) => e.id === item.name);
    const quantidade = aux ? aux.quantity : start;
    return (
      <div
        key={ name }
        className="opt
    d-flex flex-column align-items-center justify-content-center"
      >
        <h4 className="title">{ name }</h4>
        <span>{ `R$ ${price.toFixed(roundingOption)}` }</span>
        <img
          className="img-option"
          src={ source }
          width="100px"
          alt={ name }
        />
        <input
          data-type={ mealType }
          data-price={ price }
          name={ name }
          className="input-option"
          type="number"
          min="0"
          placeholder="Quantidade"
          onChange={ (e) => handleChange(e, name, price, mealType) }
          defaultValue={ quantidade }
        />
      </div>
    );
  });

  return (
    !updateCart
      && (
        <main className="row">
          <div className="dishes-column col d-flex flex-column align-items-center">
            <h3>Comida</h3>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              { renderOptionType(dishes, comida, 'comida') }
            </div>
          </div>
          <div className="drinks-column col d-flex flex-column align-items-center">
            <h3>Bebida</h3>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              { renderOptionType(drinks, bebida, 'bebida') }
            </div>
          </div>
          <div className="desserts-column col d-flex flex-column align-items-center">
            <h3>Sobremesa</h3>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              { renderOptionType(desserts, sobremesa, 'sobremesa') }
            </div>
          </div>
        </main>)
  );
}

export default Options;
