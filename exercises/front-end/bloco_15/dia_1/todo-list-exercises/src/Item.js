import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, select } = props
  
  if (select) {
    return (
      <div className="Item" style={{backgroundColor: "green"}}>
        {content}
      </div>
    );
  }
  return (
    <div className="Item">
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  select:PropTypes.bool.isRequired,
}
