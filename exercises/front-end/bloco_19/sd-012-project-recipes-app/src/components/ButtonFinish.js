
import React from 'react';
import '../styles/ButtonFinish.css';

function ButtonFinish() {
  return (
    <button
      className="button-finish"
      type="button"
      data-testid="finish-recipe-btn"
    >
      Finalizar Receita
    </button>
  );
}

export default ButtonFinish;
