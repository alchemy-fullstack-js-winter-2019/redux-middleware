import { getFacts } from '../services/ronApi';

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

export const UPDATE_LOADING = 'UPDATE_LOADING';
export const updateLoading = boolean => dispatch => {
  dispatch({
    type: UPDATE_LOADING,
    payload: boolean
  });
};
