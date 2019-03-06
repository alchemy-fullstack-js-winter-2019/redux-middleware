import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';

describe('promise middleware', () => {
  describe('isPromise', () => {
    it('returns false if not a promise', () => {
      const result = isPromise(1234);
      expect(result).toBeFalsy();
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
      applyMiddleware(promiseMiddleware)
    );
  });
  it('dispatches all actions on promise resolve', () => {
    const promise = Promise.resolve();
    const action = {
      type: 'MY ACTION',
      payload: promise
    };
    store.dispatch(action);
    return promise.then(() => {
      promise.then(() => {
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_START'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_END'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'MY ACTION',
          payload: 123
        });
      });
    });
  });
});

