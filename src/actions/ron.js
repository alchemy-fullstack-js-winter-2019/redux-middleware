import { getFacts } from '../services/__mocks__/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = count => dispatch => {
  return getFacts(count)
    .then(facts => {
      dispatch({
        type: FETCH_FACTS,
        payload: facts
      });
    });
};
