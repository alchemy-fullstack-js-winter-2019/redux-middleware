import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFacts } from '../../actions/ron';
import { actionGetFacts } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(25);
  }
  
  render() {
    return (
      <Facts {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  facts: actionGetFacts(state)
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
