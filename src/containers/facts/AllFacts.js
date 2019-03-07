import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Facts from '../../components/facts/Facts';
import { fetchFacts }  from '../../actions/ron';
import { getFacts } from '../../selectors/getFacts';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    dispatch(fetchFacts(count));
  }
});

class AllFacts extends PureComponent {
  //this is confusing because facts is already expected as a prop from our Facts component.
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  //fetch has to be passed through line 13, and 25 and its a proptype.
  componentDidMount() {
    this.props.fetch(100);
  }

  render() {
    const { facts } = this.props;
    return (
      <Facts facts={facts} />
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(AllFacts);
