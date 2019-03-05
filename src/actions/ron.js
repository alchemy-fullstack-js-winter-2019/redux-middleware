import { getFacts } from '../services/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = count => dispatch => {
  getFacts(count)
    .then(facts => dispatch({
      type: FETCH_FACTS,
      payload: facts
    }));
};
