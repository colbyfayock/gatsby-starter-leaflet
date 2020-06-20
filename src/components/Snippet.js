import React from 'react';
import PropTypes from 'prop-types';

const Snippet = ({ children }) => {
  return (
    <div className="snippet">
      <pre>
        <code>{ children }</code>
      </pre>
    </div>
  );
};

Snippet.propTypes = {
  children: PropTypes.any,
};

export default Snippet;
