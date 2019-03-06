import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/facts/AllFacts';

function Facts({ facts }) {
  const factList = facts.map((fact, i) => {
    return (
      <li key={i}>{fact}</li>
    );
  });
  return (
    <ul>
      {factList}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
