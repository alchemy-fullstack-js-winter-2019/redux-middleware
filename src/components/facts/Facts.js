import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../app/App.css';

export default function Facts({ facts }) {
  const listOfFacts = facts.map((fact, i) => {
    return <li key={i}>{fact}</li>;
  });
  return (
    <Fragment>
      <ul>
        {listOfFacts}
      </ul>
    </Fragment>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};
