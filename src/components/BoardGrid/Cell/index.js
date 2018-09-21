// External libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Cell.css';

const Cell = ({ value }) => {
  return (
    <div className="container-board-cell">
      <div className={`cell-${value}`}></div>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Cell;
