export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const promiseMiddleware = store => next => action => {
  if(!isPromise(action.payload)) {
    return next(action);
  }

  store.dispatch({ type: 'LOADSTART' });

  action.payload.then(result => {
    store.dispatch({ type: 'LOAD_END' });
    store.dispatch({
      type: action.type,
      payload: result
    });
  })
    .catch(err => {
      store.dispatch({
        type: 'PROMISE_ERROR',
        payload: err
      });
    });

};
