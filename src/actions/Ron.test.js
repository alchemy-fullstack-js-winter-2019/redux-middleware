import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware/index';
import { fetchFacts, FETCH_FACTS } from './Ron';
jest.mock('../services/ronApi.js');

describe('asda', () => {
    it('does things', done => {
        const reducer = jest.fn();
        const store = createStore(
            reducer, 
            applyMiddleware(...middleware)
        );
        store.dispatch(fetchFacts(10));
        setTimeout(() => {
            expect(reducer).toHaveBeenCalledWith(undefined, {
                type: FETCH_FACTS,
                payload: ['my fact']
            });
            done();
        }, 500);
    });
});
