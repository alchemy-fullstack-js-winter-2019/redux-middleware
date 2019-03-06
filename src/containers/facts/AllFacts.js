import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFacts, isLoading } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';
import styles from './AllFacts.css';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetch(10);
  }
  
  render() {
    return (
      <>
        {this.props.loading === true && <p className={styles.loading}>loading...</p>}
        {this.props.loading === false && <Facts facts={this.props.facts}/>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(count) {
    return fetchFacts(count)(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
