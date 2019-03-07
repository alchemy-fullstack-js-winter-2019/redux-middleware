export const logger = store => next => action => {
  console.log('hi');
  const preState = store.getState();
  next(action);
  const nextState = store.getState();
  if(preState !== nextState) {
    console.log('state updated', action);
  }
};

