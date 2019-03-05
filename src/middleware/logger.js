// store to next middleware to action dispatch
// always call next on the action
// all actions go through the middleware

export const logger = store => next => action => {
  console.log('action type & state', action.type, action.payload);

  const prevState = store.getState();
  next(action); /*passes the action to the reducer to update state*/
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }
};
