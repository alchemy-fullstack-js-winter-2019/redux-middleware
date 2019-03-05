import React from 'react';
import PropTypes from 'prop-types';

function Facts({ factsList }) {
  const facts = factsList.map((fact, i) => {
    return <li key={i}>{fact}</li>;
  });
  return (
    <ol>
      {facts}
    </ol>
  );
}

Facts.propTypes = {
  factsList: PropTypes.array.isRequired
};

export default Facts;
