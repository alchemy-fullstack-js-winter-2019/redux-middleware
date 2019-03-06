import React from 'react';
import { connect } from 'react-redux';
import { getFacts } from '../../selectors/ron';
import { fetchFacts } from '../../actions/ron';
import Facts from '../../components/facts/Facts';

export class AllFacts extends React.PureComponent {
  componentDidMount() {
    fetchFacts(20);
  }
}
const mapStateToProps = state => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => {
  dispatch(fetchFacts(20));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);

