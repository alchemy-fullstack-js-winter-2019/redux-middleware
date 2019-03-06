import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';
import Facts from '../../components/facts/Facts';
import { connect } from 'react-redux';
import { getFacts } from '../../selectors/ron';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(50);
  }

  render() {
    return (
      <Facts {...this.props}/>
    );
  }

}

const mapStateToProps = state => ({
  facts: getFacts(state),
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
