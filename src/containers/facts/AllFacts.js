import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { getFacts } from '../../selectors/ron';
import { fetchFacts } from '../../action/ron';

class AllFacts extends PureComponent {
 
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    facts: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (<Facts facts={this.props.facts}/>);
  }
}

const mapStateToProps = (state) => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(10));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
