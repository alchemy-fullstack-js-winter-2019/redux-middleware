import { FETCH_FACTS } from '../action/ron';

const initialState = {
  ronFacts: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return ({
        ...state,
        ronFacts: payload
      });
  }
}
