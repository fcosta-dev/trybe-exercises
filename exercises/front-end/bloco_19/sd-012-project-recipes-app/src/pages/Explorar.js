import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" />
      <Link to="/explorar/comidas">
        <div data-testids="explore-food">Explorar Comidas</div>
      </Link>
      <Link to="/explorar/bebidas">
        <div data-testids="explore-drinks">Explorar Bebidas</div>
      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;
