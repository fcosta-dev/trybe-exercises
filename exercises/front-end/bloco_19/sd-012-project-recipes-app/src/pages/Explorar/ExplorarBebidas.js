import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Comidas" search={ false } />
      <div>
        <Link to="/explorar/bebidas/ingredientes">
          <span data-testid="explore-by-ingredient">
            Por Ingredientes
          </span>
        </Link>
        <span data-testid="explore-surprise">
          Me Surpreenda!
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
