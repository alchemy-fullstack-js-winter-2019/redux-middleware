import React from 'react';
import PropTypes from 'prop-types';

export default function Facts({ facts }) {
  const listOfFacts = facts.map((fact, i) => {
    return <li key={i}>{fact}</li>;
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
