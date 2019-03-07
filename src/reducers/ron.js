import { FETCH_FACTS, UPDATE_LOADING } from '../action/ron';

const initialState = {
  ronFacts: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return ({
        ...state,
        ronFacts: payload,
        loading: false
      });
    case UPDATE_LOADING:
      return ({
        ...state,
        loading: true
      });
    default: 
      return state;
  }
}
