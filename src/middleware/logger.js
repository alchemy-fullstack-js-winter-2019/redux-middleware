// logs the action everytime an action is dispatched
// middleware is what happens when you have an action
// all actions go thru middleware

export const logger = store => next => action => {
  console.log('INCOMING_ACTION', action);
  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }
};
