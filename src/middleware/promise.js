export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERR = 'PROMISE_ERR';

export const promiseMiddleware = ({ dispatch }) => next => (action) => {
  const {
    type,
    loadStart = LOAD_START,
    loadEnd = LOAD_END,
    errorType = PROMISE_ERR
  } = action;
  if(!isPromise(action.payload)) {
    return next(action);
  }
  dispatch({ type: loadStart });
  action.payload.then(payload => {
    dispatch({
      type,
      payload
    });
  })
    .catch(err => {
      dispatch({
        type: errorType,
        payload: err
      });
      dispatch({ type: loadEnd });
    });
};
