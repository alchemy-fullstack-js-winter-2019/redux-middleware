import { connect } from 'react-redux';
import { getFacts, isLoading } from '../../selectors/ron';
import { fetchFacts } from '../../actions/ron';
import { withFetch } from '../../components/withFetch';
import Facts from '../../components/facts/Facts';
import '../../components/app/App.css';

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchFacts(20));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Facts));

