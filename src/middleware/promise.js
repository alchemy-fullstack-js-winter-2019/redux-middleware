export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export const promiseMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    loadStart = LOAD_START,
    loadEnd = LOAD_END,
    errorType = PROMISE_ERROR
  } = action;
  if(!isPromise(action.payload)) {
    return next(action);
  } else {
    dispatch({ type: loadStart });

    action.payload.then(payload => {
      dispatch({ type: loadEnd });
      dispatch({
        type: type,
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
  }
};
