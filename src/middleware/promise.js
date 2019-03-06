export const isPromise = payload => {
// return payload && typeof payload.then === 'function';
// return payload instanceof Promise;
  return Promise.resolve(payload) === payload;
};

export const promiseMiddleware = store => next => action => {
  if(!isPromise(action.payload)) {
    next(action);
  }
  else {
    store.dispatch({ type: 'LOAD_START' });
    action.payload
      .then(res => {
        store.dispatch({
          type: 'LOAD_END',
        });
        store.dispatch({
          type: action.type,
          payload: res
        });
      })
      .catch(error => {
        store.dispatch({
          type: 'LOAD_END',
          payload: error
        });
      });
  }
};
