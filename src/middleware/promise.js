export const isPromise = payload => payload && typeof payload.then === 'function';

export const promiseMiddleware = store => next => action => {
  if(!isPromise(action.payload)) return next(action);

  store.dispatch({ type: 'LOAD_START' });
  action.payload
    .then(res => {
      store.dispatch({ type: 'LOAD_END' });
      store.dispatch({ 
        type: action.type,
        payload: res
      });
    })
    .catch(err => store.dispatch({
      type: 'PROMISE_ERROR',
      payload: err
    }));
};
