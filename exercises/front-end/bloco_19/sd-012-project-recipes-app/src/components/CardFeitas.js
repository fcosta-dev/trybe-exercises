import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import RecipeContext from '../context/RecipeContext';
import shareIcon from '../images/shareIcon.svg';
import LinkCopiado from './LinkCopiado';

function CardFeitas({ objDetail, index }) {
  const { setCopied } = useContext(RecipeContext);
  const TWO_SECONDS = 2000;

  const gettingTags = () => {
    if (objDetail.type === 'comida') {
      return objDetail.tags.map((e, i) => {
        if (i < 2) {
          return (
            <span
              key={ e }
              data-testid={ `${index}-${e}-horizontal-tag` }
            >
              {e}
            </span>
          );
        }
        return '';
      });
    }
    return '';
  };

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, TWO_SECONDS);
  };

  const render = () => (
    <div>
      <img
        src={ objDetail.image }
        alt={ objDetail.name }
        data-testid={ `${index}-horizontal-image` }
      />
      <h2
        data-testid={ `${index}-horizontal-top-text` }
      >
        <span>
          <p>
            {objDetail.area}
            {objDetail.area && ' - '}
            {objDetail.category}
          </p>
          <p>
            {objDetail.alcoholicOrNot}
          </p>
        </span>
      </h2>
      <h3
        data-testid={ `${index}-horizontal-name` }
      >
        {objDetail.name}
      </h3>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {objDetail.doneDate}
      </p>
      {gettingTags()}
      <CopyToClipboard
        text={ `http://localhost:3000/${objDetail.type}s/${objDetail.id}` }
        onCopy={ () => {
          handleCopied();
        } }
      >
        <input
          type="image"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt={ objDetail.id }
        />
      </CopyToClipboard>
      <LinkCopiado />
    </div>
  );

  return render();
}

export default CardFeitas;
