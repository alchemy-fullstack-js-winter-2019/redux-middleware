
export const isPromise = payload =>  {
    if(payload instanceof Promise) {
        return true;
    }
    return;
};

export const promiseMiddleware = store => next => action =>  {
    if(isPromise(action.payload)) {
        store.dispatch({ type: 'LOAD_START' });
        Promise.resolve(action.payload)
            .then(result => {
                store.dispatch({ type: 'LOAD_END' });
                store.dispatch({ 
                    type: action.type,
                    payload: result
                });
            })
            .catch(err => store.dispatch({ 
                type: 'PROMISE_ERROR',
                payload: err }));
    }
    return next(action);
};
