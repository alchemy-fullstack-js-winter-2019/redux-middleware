import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../../middleware';
import { fetchFacts, FETCH_FACTS } from './ron.js';

jest.mock('../services/ronApi.js');

describe('ron actions', () => {
  it('creates facts', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(
        ...middleware
      )
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

