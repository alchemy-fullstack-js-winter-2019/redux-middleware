import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { getFacts } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(10);
  }
  
  render() {
    return (
      <Facts facts={this.props.facts}/>
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    return fetchFacts(count)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
