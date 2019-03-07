import { FETCH_FACTS, FETCH_FACTS_LOADING } from '../actions/Ron';

const initialState = {
    facts: ['hello'],
    loading: false
};  

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FACTS:
            return { ...state, facts: action.payload, loading: false };
        case FETCH_FACTS_LOADING:
            return { ...state, loading: true };
        default: 
            return state;
    }
}


