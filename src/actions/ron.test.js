import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from './ron';

jest.mock('../services/ronApi.js');

describe('ron action', () => {
  it('fetches facts and creates an action where the payload is facts', (done) => {
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
        payload: ['a fact']
      });
      done();
    }, 500);
  });
});
