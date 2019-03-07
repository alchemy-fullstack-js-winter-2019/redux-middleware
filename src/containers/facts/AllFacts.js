import { connect } from 'react-redux';
import Facts from '../../components/facts/Facts';
import { getFacts } from '../../selectors/ron';
import { fetchFacts } from '../../action/ron';
import { withFetch } from '../../components/withFetch';


const mapStateToProps = (state) => ({
  facts: getFacts(state),
  // eslint-disable-next-line no-undef
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
