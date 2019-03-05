const initialState = {
  facts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_FACTS':
      return { ...state, facts: action.payload };
    default:
      return state;
  }
}

