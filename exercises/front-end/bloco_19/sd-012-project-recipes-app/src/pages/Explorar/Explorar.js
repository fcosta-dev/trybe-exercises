import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" />
      <Link to="/explorar/comidas">
        <div data-testid="explore-food">Explorar Comidas</div>
      </Link>
      <Link to="/explorar/bebidas">
        <div data-testid="explore-drinks">Explorar Bebidas</div>
      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;
