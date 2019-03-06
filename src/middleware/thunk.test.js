import { thunk } from './thunk';
import { createStore, applyMiddleware } from 'redux';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(reducer, applyMiddleware(thunk));
  });
  
  it('behaves normally wne action is an object', () => {
    const action = {
      type: 'MY_ACTION'
    };
    const next = jest.fn();

    thunk(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('involes action if action is a function', () => {
    const action = jest.fn();
    
    store.dispatch(action);

    expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
  });

});
