import Facts from '../components/facts/Facts';
import { connect } from 'react-redux';
import { getFacts, isLoading } from '../selectors/ron';
import { fetchFacts } from '../actions/fetchFacts';


const mapStateToProps = state => ({
  facts: getFacts(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(10));
  }
});
const AllFacts = Facts;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);

