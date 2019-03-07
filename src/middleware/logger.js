export const logger = store => next => action => {
  console.log('INCOMING ACTION', action);

  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }
};

// this is the same as above
// function logger(store) {
//   return function(next) {
//     return function(action) {
//     }
//   }
// }
