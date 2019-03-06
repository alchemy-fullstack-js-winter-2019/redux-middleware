import React from 'react';
import { connect } from 'react-redux';
import Facts from '../../components/facts/Facts';

class AllFacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = 
  }

  componentDidMount() {

  }
  const mapStateToProps = (state, props) => {
    facts: getFacts(state, props)
  };

  const mapDispatchToProps = dispatch => ({
    dispatch(count);
  });

  render() {
    return (
      <Facts />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);