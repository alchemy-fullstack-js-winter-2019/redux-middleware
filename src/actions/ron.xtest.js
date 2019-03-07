import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from './ron';

jest.mock('../services/ronApi.js');

describe('ron action', () => {
  test('creates an with a payload of facts', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, 
      applyMiddleware(...middleware)
    );

    store.dispatch(fetchFacts(10));

    setTimeout(() => {
      expect(reducer).toHaveBeenCalled(undefined, {
        type: FETCH_FACTS,
        payload: ['my fact']
      });
      done();
    }, 500);
  });
});
