//adding fn between action dispatch and reducers.
//next passes action to reducer// next triggers action
//middleware happens anytime we dispatch an action.

export const logger = store => next => action => {
  console.log('INCOMING ACTION', action);

  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }
};
