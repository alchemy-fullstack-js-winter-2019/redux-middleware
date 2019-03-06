import { FETCH_FACTS, FETCH_FACTS_LOADING } from '../action/ron';

const initialState = {
  facts: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return { ...state, facts: payload };
    case FETCH_FACTS_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}
