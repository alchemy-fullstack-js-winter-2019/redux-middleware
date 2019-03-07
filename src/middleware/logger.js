export const logger = store => next => action => {
    console.log('dispatching', action);
    const prevState = store.getState();
    next(action);
    const newState = store.getState();
    if(prevState !== newState) {
        console.log('next state', store.getState());

    }
};

