import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFactsWithPromise, FETCH_FACTS } from './ron';




jest.mock('../services/ronApi');

describe('ron actions test', () => {
  it('can fetch facts', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchFactsWithPromise(10));

    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_FACTS,
        payload: ['my facts']
      });
      done();
    }, 500);
  });
});
