import { connect } from 'react-redux';
import { fetchFacts } from '../../action/ron';
import { getRonFacts, isLoading } from '../../selectors/ron';
import Facts from '../../facts/Facts';
import { withFetch } from '../../withFetch';

const mapStateToProps = (state) => ({
  facts: getRonFacts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    dispatch(fetchFacts(30));
  }
});

const AllFacts = withFetch(Facts);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);


