import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from './ron';

jest.mock('../services/ronApi.js');

describe('ron action', () => {
  it('fetchFacts', () => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchFacts(10));

    setTimeout(() => {
      expect(reducer).hasBeenCalledWith({
        type: FETCH_FACTS,
        payload: ['my fact']
      }, 500);
    });
  });
});
