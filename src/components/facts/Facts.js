import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  const factsList = facts.map(fact => <li key={fact}>{fact}</li>);
  return (
    <ol>
      {factsList}
    </ol>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
