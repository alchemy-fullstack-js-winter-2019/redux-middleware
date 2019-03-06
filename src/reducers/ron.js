import { FETCH_FACTS } from '../action/ron';

const initalState = {
  facts: []
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return { ...state, facts: payload };
    default: 
      return state;
  }
}
