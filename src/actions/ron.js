import { getFacts } from '../services/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = numberOfFacts => dispatch => {
  return getFacts(numberOfFacts)
    .then(facts => {
      dispatch({
        type: FETCH_FACTS,
        payload: facts
      });
    });
};
