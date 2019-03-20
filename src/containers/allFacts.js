import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Facts from '../components/facts/Facts';
import { fetchFacts } from '../actions/ron';
import { getFacts, isLoading } from '../selectors/ron';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetch(10);
  }
  render() {
    return (
      <Facts {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    dispatch(fetchFacts(count));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
