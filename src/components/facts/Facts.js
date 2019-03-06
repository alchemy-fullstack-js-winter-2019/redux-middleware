import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import '../app/App.css';

export default function Facts({ facts, loading }) {
  const listOfFacts = facts.map((fact, i) => {
    return <li key={i}>{fact}</li>;
  });
  return (
    <Fragment>
      {loading && <Loading />}
      <ul>
        {listOfFacts}
      </ul>
    </Fragment>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
