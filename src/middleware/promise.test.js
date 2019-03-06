import { isPromise, promiseMiddleware } from './promise';
import { applyMiddleware } from 'redux';
import { createStore } from 'react-redux';

describe('isPromise', () => {
  it('returns false if not passed a promise', () => {
    const result = isPromise('abc');
    expect(result).toBeFalsy();
  });

  it('returns true if passed a promise', () => {
    const promise = Promise.resolve(1234);
    const result = isPromise(promise);
    expect(result).toBeTruthy();
  });

  describe('promise middleware', () => {
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
          type: 'MY_ACTION'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_END'
        });
      });
    });
  });
});
