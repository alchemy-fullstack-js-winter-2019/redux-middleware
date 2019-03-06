import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

function Facts({ facts }) {
  const factsList = facts.map(fact => <li key={fact}>{fact}</li>);
  return (
    <>
      {!factsList && <Loader/>}
      <ol>
        {factsList}
      </ol>
    </>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
