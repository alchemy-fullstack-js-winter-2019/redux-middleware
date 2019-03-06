import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFacts, isLoading } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';

class AllFacts extends PureComponent {
  // state = {
  //   facts: []
  // };
  static propTypes ={
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    //fetch what we rendered below
    this.props.fetch(); 
  }
  render() {
    const { isLoading } = this.props;
    return (
    <>
      {isLoading ? 
        <h1>LOADING!</h1 > 
        : <Facts facts={this.props.facts} />}
    </>
    );
  }
}
const mapStateToProps = state => ({
  facts: getFacts(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(20));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);



