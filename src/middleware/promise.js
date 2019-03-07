export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export const promiseMiddleware = store => next => action => {
  if(!isPromise(action.payload)) {
    return next(action);
  }
  // action.payload.then(
  //   res => {
  //     action.payload = res;
  store.dispatch({ type: 'LOAD_START' });
  action.payload.then(result => {
    store.dispatch({ type: 'LOAD_END' });
    store.dispatch({
      type: action.type,
      payload: result
    });
  })
    .catch(error => {
      store.dispatch({
        type: 'PROMISE ERROR',
        payload: error
      });
    });
};

