import React from 'react';
import Options from '../components/Options';
import Header from '../components/Header';
import Cart from '../components/Cart';
import MyProvider from '../context/MyProvider';

function Order() {
  return (
    <div className="order d-flex flex-column align-items-center">
      <MyProvider>
        <Header />
        <Cart />
        <Options />
      </MyProvider>
    </div>
  );
}

export default Order;
