import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Facts from '../../components/facts/Facts';
import { getFacts } from '../../selectors/ron';
import { fetchFacts } from '../../action/ron';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(10));
  }
});

class AllFacts extends PureComponent {
    static propTypes = {
      facts: PropTypes.array.isRequired,
      fetch: PropTypes.func.isRequired
    };
  
    componentDidMount() {
      this.props.fetch();
    }
  
    render() {
      const { facts } = this.props;
      return (
        <Facts facts={facts} />
      );
    }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(AllFacts);
