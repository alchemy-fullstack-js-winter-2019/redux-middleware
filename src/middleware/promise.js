export const isPromise = payload => {
// return payload && typeof payload.then === 'function';
// return payload instanceof Promise;
  return Promise.resolve(payload) === payload;
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export const promiseMiddleware = ({ dispatch }) => next => (action) => {
  const {
    type,
    loadStart = LOAD_START,
    loadEnd = LOAD_END,
    errorType = PROMISE_ERROR
  } = action;

  if(!isPromise(action.payload)) {
    next(action);
  }
  else {
    dispatch({ type: loadStart });
    action.payload
      .then(payload => {
        dispatch({
          type,
          payload
        });
        dispatch({
          type: loadEnd,
        });
      })
      .catch(error => {
        dispatch({
          type: errorType,
          payload: error
        });
        dispatch({
          type: loadEnd,
        });
      });
  }
};
