import { connect } from 'react-redux';
import { getFacts } from '../../services/ronApi';
import Facts from '../../components/facts/Facts';

const mapStateToProps = state => ({
  facts: getFacts(state)
});

export default connect(
  mapStateToProps
)(Facts);
