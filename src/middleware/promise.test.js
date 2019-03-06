import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';

describe('promise middleware', () => {
  describe('is promise', () => {
    it('returns false if it is not a promise', () => {
      const result = isPromise(1234);
      expect(result).toBeFalsy();
    });
    it('return true if the promise is a promise', () => {
      const promise = Promise.resolve(1234);
      const result = isPromise(promise);
      expect(result).toBeTruthy();
    });
  });
});

describe('middleware', () => {
  let reducer = null;
  let store = null;
  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer,
      applyMiddleware(
        promiseMiddleware
      )
    );
  });
  it('dispatches all actions on promise resolve', () => {
    const promise = Promise.resolve();
    const action = 
      { 
        type: 'LOAD_START',
        payload: promise
      };
   

    store.dispatch(action);
    return promise.then(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
    });
  });
});
