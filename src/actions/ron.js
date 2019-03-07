import { getFacts } from '../services/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const UPDATE_LOADING = 'UPDATE_LOADING';
export const fetchFacts = count => dispatch => {
  dispatch({
    type: FETCH_FACTS,
    loadStart: UPDATE_LOADING,
    payload: getFacts(count)
  });
};

