import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from '../../../../Library/Caches/typescript/3.3/node_modules/redux';

describe('isPromise', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer,
      applyMiddleware(promiseMiddleware)
    );
  });

  it('returns false if not passed a promise', () => {
    const result = isPromise(1234);
    expect(result).toBeFalsy();
  });

  it('returns true if passed a promise', () => {
    const promise = Promise.resolve(1234);
    const result = isPromise(promise);
    expect(result).toBeTruthy();
  });

  it('dispatches all actions on promise resolve', () => {
    const promise = Promise.resolve(123);
    const action = { 
      type: 'MY_ACTION',
      payload: promise
    };

    store.dispatch(action);
    return promise.finally(() => {
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
