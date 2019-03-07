import React from 'react';
// import { getFacts} from '../../services/__mocks__/ronApi';
import PropTypes from 'prop-types';

const Facts = ({ facts }) => {
  const listOfFacts = facts.map(fact => {
    return (
      <li key={fact}>{fact}</li>
    );
  });
  return (
    <ul>{listOfFacts}</ul>
  );
};
Facts.propTypes = {
  facts: PropTypes.array
};
export default Facts;
