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
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

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