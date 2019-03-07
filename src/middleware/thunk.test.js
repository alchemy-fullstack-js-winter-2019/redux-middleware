import { createStore, applyMiddleware } from 'redux';
import { thunk } from './thunk';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(reducer, applyMiddleware(thunk));
  });

  it('behaves normally when action is an object', () => {
    const next = jest.fn();
    const action = {
      type: 'UPDATE_TITLE',
      payload: 'title'
    };

    thunk(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it('invokes action if action is a function', () => {
    const action = jest.fn();
    
    store.dispatch(action);

    expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
  });
});
