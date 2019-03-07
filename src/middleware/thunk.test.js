import { thunk } from './thunk';
import { createStore, applyMiddleware } from 'redux';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer,
      applyMiddleware(thunk)
    );
  });

  it('behaves normally when action is an obj', () => {
    const action = {
      type: 'MY_ACTION'
    };
    const next = jest.fn();
    
    thunk(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('invokes the action if action is function', () => {
    const action = jest.fn();
    store.dispatch(action);

    expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
  });
});
