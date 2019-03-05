import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  console.log(facts);
  return (
    <p>{facts}</p>
  );
}

Facts.propTypes = {
  facts: PropTypes.object.isRequired
};

export default Facts;
