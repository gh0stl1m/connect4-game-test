// External libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Cell from './Cell';

const BoardGrid = ({ cells, handleClick }) => {
  return (
    <div className="container-board-colum" onClick={() => handleClick()}>
      {
        [...Array(cells.length)].map((value, index) => <Cell key={index} value={cells[index]}/>)
      }
    </div>
  );
}

BoardGrid.propTypes = {
  cells: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default BoardGrid;
