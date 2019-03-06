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
  it('behaves normally when action is an object', () => {
    const action = {
      type: 'MY_ACTION',
    };
    thunk(store)(jest.fn())(action);
    expect(jest.fn()).toHaveBeenCalledWith(action);
  });

  it('invokes action if action is a function', () => {
    const action = jest.fn();
    store.dispatch(action);

    expect(action).toHaveBeenCalled(expect.any(Function), store.getState);
  });
});
