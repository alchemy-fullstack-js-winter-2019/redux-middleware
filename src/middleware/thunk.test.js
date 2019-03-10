import { createStore, applyMiddleware } from 'redux';
import { thunk } from './thunk';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer,
      applyMiddleware(
        thunk
      )
    );
  });

  it('behaves normal when an action is an object', () => {
    const action = {
      type: 'THE_ACTION'
    };

    const next = jest.fn();

    thunk(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('invokes an action if action is a function', () => {
    const action = jest.fn();

    store.dispatch(action);

    expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
  });
});
