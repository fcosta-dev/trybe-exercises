import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" search={ false } />
      <div>
        <Link to="/explorar/comidas/ingredientes">
          <span data-testid="explore-by-ingredient">
            Por Ingredientes
          </span>
        </Link>
        <Link to="/explorar/comidas/area">
          <span data-testid="explore-by-area">
            Por Local de Origem
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

export default ExplorarComidas;
