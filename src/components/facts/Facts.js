import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  const listOfFacts = facts.map(fact => {
    return <li key={fact}>{fact}</li>;
  });
  return (
    <ul>
      {listOfFacts}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
