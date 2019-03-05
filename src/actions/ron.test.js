import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from './ron';

jest.mock('../services/ronApi.js');

describe('ron action', () => {
  it('fetchFacts creates an action', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );

    store.dispatch(fetchFacts(10));

    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_FACTS,
        payload: ['fact']
      });
      done();
    }, 500);
  });
});
