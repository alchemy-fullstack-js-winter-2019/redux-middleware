export const logger = store => next => action =>{
  console.log('INCOMMING ACTION', action);
  
  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE_UPDATED', nextState);
  }
};

