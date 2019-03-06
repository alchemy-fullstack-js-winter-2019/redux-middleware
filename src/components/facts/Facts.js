import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  const factsList = facts.map((fact, i) => {
    return <li key={i}>{fact}</li>;
  });
  return (
    <ul>
      {factsList}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
