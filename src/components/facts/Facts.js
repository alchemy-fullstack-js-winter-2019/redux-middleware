import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/facts/AllFacts.css';

function Facts({ facts, loading }) {
  const factList = facts.map((fact, i) => {
    return (
      <li key={i}>{fact}</li>
    );
  });
  return (
    <>
    {loading ? <p>Loading...</p> :
      <ul>
        {factList}
      </ul>
    }
    </>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Facts;
