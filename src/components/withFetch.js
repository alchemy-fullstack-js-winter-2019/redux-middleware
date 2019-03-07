import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }
    render() {
      return ( 
        <>
          {this.props.loading ? <h1> LOADING </h1> : <Component {...this.props} />}
        </>
      );
    }
  }

  return WithFetch;
};

