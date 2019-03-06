//adding fn between action dispatch and reducers.
//next passes action to reducer// next triggers action
//middleware happens anytime we dispatch an action.

export const logger = store => next => action => {
  console.log('INCOMING ACTION', action);
  //before our state gets passed to reducer
  const prevState = store.getState();
  next(action);// next passes our state to the reducer, next is a dispatch. 
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }
};

//line 5 is equivilant to 
// function logger(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }