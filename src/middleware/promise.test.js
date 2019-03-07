import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';


describe('promise middleware', () => {
  describe('isPromise', () => {
    it('returns false if a promise isnt passed', () => {
      const result = isPromise(1234);
      expect(result).toBeFalsy();
    });
    it('returns true if passed a promise', () => {
      const promise = Promise.resolve(1234);
      const result = isPromise(promise);
      expect(result).toBeTruthy();
    });
  });
  describe('middleware', () => {
    let reducer = null;
    let store = null;

    beforeEach(() => {
      reducer = jest.fn();
      store = createStore(
        reducer, 
        applyMiddleware(promiseMiddleware)
      );
    });
    
    it('dispatches actions at the promise resolve', () => {
      const promise = Promise.resolve(123);
      const action = {
        type: 'ACTION',
        payload: promise
      };
      store.dispatch(action);

      return promise.then(() => {
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_START'
        });
        expec t(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_END'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'MY_ACTION',
          payload:123
        });
      });
    });
  });
});

