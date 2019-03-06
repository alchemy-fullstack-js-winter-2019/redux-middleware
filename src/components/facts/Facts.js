import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

export default function Facts({ facts }) {
  const listOfFacts = facts.map((fact, i) => {
    return <li key={i}>{fact}</li>;
  });
  return (
    <Fragment>
      <div className={styles.container}>
        <img className={styles.img} src='https://images.immediate.co.uk/volatile/sites/3/2016/08/115819.jpg?quality=90&resize=620,413'/>
        <ul>
          {listOfFacts}
        </ul>
      </div>
    </Fragment>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};
