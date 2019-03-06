import { getFacts } from '../services/ronApi';

export const UPDATE_LOADING = 'UPDATE_LOADING';
export const updateLoading = loading => {
  if(loading) {
    return {
      type: UPDATE_LOADING,
      payload: false
    };
  } else {
    return {
      type: UPDATE_LOADING,
      payload: true
    };
  }
};

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


