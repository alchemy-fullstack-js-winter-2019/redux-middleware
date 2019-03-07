import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';

describe('promise test', () => {
  it('can test if it is NOT a promise', () => {
    const notPromise = isPromise(1234);
    expect(notPromise).toBeFalsy();
  });
  it('can test if it is a promise', () => {
    const fn = Promise.resolve(1234);
    const promiseTest = isPromise(fn);
    expect(promiseTest).toBeTruthy();
  });
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
  it('can middleware a promise', () => {
    const promise = Promise.resolve();
    const action = {
      type: 'MY_ACTION',
      payload: promise
    };

    store.dispatch(action);

    promise.then(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalled(undefined, {
        type: 'LOAD_END'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'MY_ACTION'
      });
    });
  });
});
