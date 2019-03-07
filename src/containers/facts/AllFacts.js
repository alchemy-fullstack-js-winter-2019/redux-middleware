import { connect } from 'react-redux';
import { getFacts, isLoading } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import { fetchFacts } from '../../action/ron';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    return fetchFacts(count)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Facts));
