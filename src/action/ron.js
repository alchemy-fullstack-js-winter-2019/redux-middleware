import { getFacts } from '../services/ronApi';

export const UPDATE_LOADING = 'UPDATE_LOADING';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = count => dispatch => {
  dispatch({
    type: UPDATE_LOADING
  });

  return getFacts(count)
    .then(facts => {
      dispatch({
        type: FETCH_FACTS,
        payload: facts
      });
    }); 
};

