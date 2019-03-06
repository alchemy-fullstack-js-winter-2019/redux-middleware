import { getFacts } from '../services/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = count => dispatch => {
  dispatch(updateLoading(true));
  return getFacts(count)
    .then(facts => {
      dispatch({
        type: FETCH_FACTS,
        payload: facts
      });
      dispatch(updateLoading(false));
    });
};

export const UPDATE_LOADING = 'UPDATE_LOADING';
export const updateLoading = status => dispatch => {
  dispatch({ 
    type: UPDATE_LOADING,
    payload: status
  });
};
