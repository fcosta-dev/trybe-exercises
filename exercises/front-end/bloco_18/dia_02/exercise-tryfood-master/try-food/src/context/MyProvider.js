import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 */
  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.splice(indexPresentInList, 1);
    setOrderList({ ...orderList,
      [itemType]: orderState });
  };

  /* Passo 9 */
  const incrementItemInList = (orderState, indexPresentInList, newItem) => {
    orderState.splice(indexPresentInList, 1, newItem);
    setOrderList({ ...orderList, [newItem.itemType]: orderState });
  };

  /* Passo 7 */
  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    }
    incrementItemInList(orderState, indexPresentInList, newItem);
  };

  /* Passo 6 */
  const addItemToList = (newItem) => {
    setOrderList({ ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem] });
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    /* Passo 4 */
    const isPresentInList = orderList[itemType].some((item) => item.id === itemName);
    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* Passo 5 */
    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
