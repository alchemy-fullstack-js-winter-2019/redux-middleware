const myMiddleware = store => next => action => {
    console.log('dispatcing', action )
    let result = next(action);
    console.log('updated state', store.getState());
    return result
};
