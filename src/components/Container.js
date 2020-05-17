import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, type }) => {
  let containerClassName = 'container';

  if ( typeof type === 'string' ) {
    containerClassName = `${containerClassName} container-${type}`;
  }

  if ( typeof className === 'string' ) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return <div className={containerClassName}>{ children }</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Container;
