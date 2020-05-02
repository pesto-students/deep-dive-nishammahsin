import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { name = 'Button Name', type = 'primary' } = props;

  return (
    <div className={`btn btn-${type}`}>
      <p className="btn-text"> {name} </p>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.element.isRequired,
  type: PropTypes.element.isRequired,
};

export { Button };
