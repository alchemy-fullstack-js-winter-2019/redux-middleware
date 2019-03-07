import { thunk } from './thunk';
import { applyMiddleware, createStore } from 'redux';

describe('thunk test', () => {
    let store = null;
    let reducer = null;
    beforeEach(() => {
        reducer = jest.fn();
        store = createStore(
            reducer, 
            applyMiddleware(
                thunk
            )
        );
    });
    it('tests the type of thing an action is', () => {
        const action = {
            type: 'MY_ACTION'
        };
        const next = jest.fn();

        thunk(store)(next)(action);
        expect(next).toHaveBeenCalledWith(action);
    });
    it('invokes action if action is a function', () => {
        const action = jest.fn();

        store.dispatch(action);

        expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
    });
})
;
