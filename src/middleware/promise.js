export const isPromise = payload => {
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
    return next(action);
  }
  dispatch({ type: loadStart });

  action.payload.then(result => {
    dispatch({
      type,
      payload: result
    });
    dispatch({ type: loadEnd });
  })
    .catch(error => {
      dispatch({
        type: errorType,
        payload: error
      });
    });
};
  

