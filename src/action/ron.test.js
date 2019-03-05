import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from '../action/ron';

jest.mock('../services/ronApi.js');

describe('reducer', () => {
  it('fetchs ron facts', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    
    store.dispatch(fetchFacts(10));
    
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledTimes(2);
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_FACTS,
        payload: ['my fact']
      });
      done();
    }, 500);
  });
});
