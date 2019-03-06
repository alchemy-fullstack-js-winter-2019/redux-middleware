//Thunk- expects dipsatches to be actions, will test if the aciton is a function. if payload is not a fn call next, it it 

export const thunk = store => next => action => {
  if(typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  next(action);
};