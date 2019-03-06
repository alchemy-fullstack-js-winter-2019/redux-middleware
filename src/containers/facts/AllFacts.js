import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getFacts, getLoading } from '../../selectors/ron';
import { fetchFacts } from '../../actions/ron';
import Facts from '../../components/facts/Facts';
import Loading from '../../components/Loading';
import PropTypes from 'prop-types';

class AllFacts extends React.PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };
  
  componentDidMount() {
    this.props.fetch(20);
  }

  render() {
    return (
      <Fragment>
        {this.props.loading === false && <Facts facts={this.props.facts}/>}
        {this.props.loading === true && <Loading />}
      </Fragment>
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

