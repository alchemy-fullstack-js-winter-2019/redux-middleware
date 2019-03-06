import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchFacts, updateLoading } from '../../action/ron';
import Facts from '../../components/facts/Facts';
import { connect } from 'react-redux';
import { getFacts, getLoadingStatus } from '../../selectors/ron';
import WithFetch from '../../components/facts/Loading';

const LoadingWithFetch = WithFetch(Facts);

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetch(50);
  }

  render() {
    return (
      <LoadingWithFetch { ...this.props }/>
      // <Facts {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: getLoadingStatus(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    dispatch(fetchFacts(count));
  },
  loadFacts() {
    dispatch(updateLoading(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
