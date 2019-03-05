import { FETCH_FACTS } from '../actions/Ron';

const initialState = {
    facts: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FACTS:
            return action.payload;
    }
    return state;
}


