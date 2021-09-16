import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import shareIcon from '../images/shareIcon.svg';
import LinkCopiado from './LinkCopiado';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../styles/CardFeitas.css';

function CardFavoritas({ objDetail, index }) {
  const { setCopied, setReceitasFav } = useContext(RecipeContext);
  const TWO_SECONDS = 2000;

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, TWO_SECONDS);
  };

  const removeFavorite = () => {
    if (localStorage.getItem('favoriteRecipes') !== null) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const updatedFavorites = favoriteRecipes.filter((elem) => elem.id !== objDetail.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      setReceitasFav(updatedFavorites);
    }
  };

  const render = () => (
    <div className="done-card-body">
      <Link to={ `/${objDetail.type}s/${objDetail.id}` }>
        <h1
          data-testid={ `${index}-horizontal-name` }
        >
          {objDetail.name}
        </h1>
      </Link>

      <div className="card-content">
        <Link to={ `/${objDetail.type}s/${objDetail.id}` }>
          <img
            src={ objDetail.image }
            alt={ objDetail.name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>

        <section>
          <h3
            data-testid={ `${index}-horizontal-top-text` }
          >

            <p>
              {objDetail.area}
              {objDetail.area && ' - '}
              {objDetail.category}
            </p>
            <p>
              {objDetail.alcoholicOrNot}
            </p>

          </h3>
          <CopyToClipboard
            text={ `http://localhost:3000/${objDetail.type}s/${objDetail.id}` }
            onCopy={ () => {
              handleCopied();
            } }
          >
            <input
              className="share-btn"
              type="image"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt={ objDetail.id }
            />
          </CopyToClipboard>
          <LinkCopiado />
          <input
            className="favorite-btn"
            onClick={ () => removeFavorite() }
            type="image"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="foto do item"
          />
        </section>
      </div>
    </div>
  );

  return render();
}

export default CardFavoritas;
