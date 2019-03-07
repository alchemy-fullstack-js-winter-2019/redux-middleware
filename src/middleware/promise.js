export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

// eslint-disable-next-line no-unused-vars
export const promiseMiddleware = store => next => action =>
{
  // check if action.payload is a promise
  if(!isPromise(action.payload)) {
    // if not do the normal thing
    return next(action);
  }
  // if it is a promise
  // dispatch a LOAD_START action
  // wait for the promise to resolve
  // dispatch LOAD_END action
  // dispatch original action with results
  // on error dispatch PROMISE_ERROR action



};
