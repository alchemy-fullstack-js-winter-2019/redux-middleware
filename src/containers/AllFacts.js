import Facts from '../components/facts/Facts';
import { connect } from 'react-redux';
import { getFacts, isLoading } from '../selectors/ron';
import { fetchFactsWithPromise } from '../actions/ron';
import { withFetch } from '../components/withFetch';


const mapStateToProps = state => ({
  facts: getFacts(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFactsWithPromise(10));
  }
});
const AllFacts = withFetch(Facts);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);

