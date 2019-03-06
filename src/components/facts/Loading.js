import React from 'react';

function withFetch(Component) {
  // eslint-disable-next-line react/prop-types
  return function withLoading({ loading, ...props }) {
    if(loading) return; (<Component {...props} />);
    return (<p>Hold up - fetching Ron!</p>);
  };
}

export default withFetch;
