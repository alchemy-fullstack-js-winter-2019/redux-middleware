import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class AllFacts extends PureComponent {
  static.propTypes = {
    facts: propTypes.array.isRequired,
    fetch: propTypes.func.isRequired
  }

  componentDidMount
  render() {
    return <Facts>
  }
}