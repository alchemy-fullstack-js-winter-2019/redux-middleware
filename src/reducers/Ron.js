import { FETCH_FACTS } from '../actions/Ron';

const initialState = {
    facts: ['hello']
};  

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FACTS:
            return { ...state, facts: action.payload };
        default: 
            return state;
    }
}


