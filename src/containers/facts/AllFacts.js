import { connect } from 'react-redux';
import Facts from '../../components/facts/Facts';
import { getFacts, isLoading } from '../../selectors/ron';
import { fetchFacts } from '../../action/ron';
import { withFetch } from '../../components/withFetch';


const mapStateToProps = (state) => ({
  facts: getFacts(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(10));
  }
});

const AllFacts = withFetch(Facts);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
