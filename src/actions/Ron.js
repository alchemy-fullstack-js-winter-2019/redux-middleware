export const FETCH_FACTS = 'FETCH_FACTS';

export const fetchFacts = (facts) => {
    return {
        type: FETCH_FACTS,
        payload: facts
    };
};
