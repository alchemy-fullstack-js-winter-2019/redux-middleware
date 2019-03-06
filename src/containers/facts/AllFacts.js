import React from 'react';
import { connect } from 'react-redux';
import { getFacts, getLoading } from '../../selectors/ron';
import { fetchFacts, updateLoading } from '../../actions/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';

class AllFacts extends React.PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    loading: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.loading(true);
    this.props.fetch(20)
      .then(() => this.props.loading(false));
  }

  render() {
    return (
      <Facts facts={this.props.facts}/>
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
  },
  loading(status) {
    return updateLoading(status)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);

