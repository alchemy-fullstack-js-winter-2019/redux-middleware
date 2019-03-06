import React from 'react';
import PropTypes from 'prop-types';

export default function Facts({ facts, fetch }) {
  const factsList = facts.map((fact, i) => {
    return <li fetch={fetch} key={i}>{fact}</li>;
  });
  return (
    <ul>
      {factsList}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired,
  fetch: PropTypes.func.isRequired
};
