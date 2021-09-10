import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Cart() {
  const { orderList, updateCart } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem('login'));
  const { email } = user;
  const start = 0;
  const orderItems = [...orderList.comida, ...orderList.bebida, ...orderList.sobremesa];
  const total = orderItems
    .map((item) => Number(item.quantity))
    .reduce((acc, next) => acc + next, start);

  return (
    updateCart
      && (
        <main className="cart-wall d-flex flex-column align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <p className="list-title">Usuário:</p>
            <p className="list-title">{ email }</p>
          </div>
          <h4 className="list-title">Pedido</h4>
          <div className="list-items">
            { orderItems
              .map((item) => {
                const { id, quantity, totalPrice } = item;
                return (
                  <ul
                    key={ id }
                    className="d-flex flex-column
                  justify-content-end"
                  >
                    <li className="d-flex flex-row">
                      <p>{ quantity }</p>
                      <p>{ id }</p>
                      <p>{ `R$ ${totalPrice}` }</p>
                    </li>
                  </ul>
                );
              }) }
          </div>
          <div className="d-flex w-50 flex-row justify-content-start">
            <span className="total">Total items:</span>
            <span className="total">{ total }</span>
          </div>
        </main>)
  );
}

export default Cart;
