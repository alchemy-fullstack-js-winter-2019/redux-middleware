export const isPromise = payload => payload && typeof payload.then === 'function';

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

  if(!isPromise(action.payload)) return next(action);

  dispatch({ type: loadStart });
  action.payload
    .then(payload => {
      dispatch({ type: loadEnd });
      dispatch({ 
        type,
        payload
      });
    })
    .catch(err => dispatch({
      type: errorType,
      payload: err
    }));
};
