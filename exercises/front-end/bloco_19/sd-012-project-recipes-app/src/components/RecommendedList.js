import React from 'react';
import PropTypes from 'prop-types';
import RecommendedCard from './RecommendedCard';

function RecommendedList({ value }) {
  const MAX_RECIPES = 6;
  return (
    <div>
      {value.map((elem, index) => {
        if (index < MAX_RECIPES) {
          return (<RecommendedCard
            key={ elem.strMeal }
            card={ elem }
            index={ index }
          />);
        }
        return '';
      })}
    </div>
  );
}

RecommendedList.propTypes = {
  value: PropTypes.shape(
    PropTypes.any,
  ).isRequired,
};

export default RecommendedList;
