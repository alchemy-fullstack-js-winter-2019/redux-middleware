import { createStore, applyMiddleware } from 'redux';
import { isPromise, promiseMiddleware } from './promise';

describe('promise middleware', () => {
  describe('isPromise', () => {
    it('returns false if not passed a promise', () => {
      const noPromise = isPromise(1234);
      expect(noPromise).toBeFalsy();
    });

    it('returns true if passed a promise', () => {
      const fn = Promise.resolve(1234);
      const withPromise = isPromise(fn);
      expect(withPromise).toBeTruthy();
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

    it('dispatches all actions on promise resolve', () => {
      const promise = Promise.resolve(123);
      const action = {
        type: 'MY_ACTION',
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
          type: 'MY_ACTION',
          payload: 123
        });
      });
    });
  });
});
