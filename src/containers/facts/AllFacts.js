import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { getFacts, getLoading } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetch(10);
  }
  
  render() {
    return (
      <>
        {/* {loading && <p>loading is true</p>} */}
        <Facts facts={this.props.facts}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: getLoading(state)
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
