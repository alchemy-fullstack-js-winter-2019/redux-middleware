import { isPromise, promiseMiddleware } from './promise';
import { applyMiddleware, createStore } from 'redux';

describe('promise middleware', () => {
  it('returns false if not passed a promise', () => {
    const result = isPromise(123);
    expect(result).toBeFalsy();
  });

  it('returns true if passed a promise', () => {
    const result = isPromise(Promise.resolve(123));
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

  it('dispatches all actions on promise resolve', () => {
    const promise = Promise.resolve(123);
    const action = {
      type: 'TEST_ACTION',
      payload: promise
    };

    store.dispatch(action);

    promise.then(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });

      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });

      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'TEST_ACTION',
        payload: 123
      });
    });
  });
});
