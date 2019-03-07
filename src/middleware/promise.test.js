import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';

describe('promise test', () => {
    let store = null;
    let reducer = null;

    beforeEach(() => {
        reducer = jest.fn();
        store = createStore(
            reducer,
            applyMiddleware(promiseMiddleware)
        );
    });
    it('returns false if not given a promise', () => {

        const badResult = isPromise(142134);
        expect(badResult).toBeFalsy();
        
    });
    it('return true if given a promise', () => {
        const promise = Promise.resolve();
        const goodResult = isPromise(promise);

        expect(goodResult).toBeTruthy();

    });

    it('dispatches all actions on promise resolve', () => {
        const promise = Promise.resolve(1423423);
        const action = {
            type: 'SOME_ACTION',
            payload: promise
        };
  
        store.dispatch(action);
  
        return promise.then(() => {
            expect(reducer).toHaveBeenCalledWith(undefined, {
                type: 'LOAD_START'
            });
  
            expect(reducer).toHaveBeenCalledWith(undefined, {
                type: 'LOAD_END'
            });
  
            expect(reducer).toHaveBeenCalledWith(undefined, {
                type: 'SOME_ACTION',
                payload: 1423423
            });
        });
    });
});
