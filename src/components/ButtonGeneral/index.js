// External libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ButtonGeneral.css';

const ButtonGeneral = ({ name, classes, handleClick }) => {
  return (
    <div className={`container-general-button-link ${(classes) ? classes : ''}`}>
      <button onClick={handleClick}>{name}</button>
      <div></div>
    </div>
  );
}

ButtonGeneral.propTypes = {
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export default ButtonGeneral;
