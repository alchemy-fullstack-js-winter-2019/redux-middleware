import { fetchFacts } from '../actions/Ron';

export const getFacts = count => dispatch => {
    return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
        .then(facts => {
            dispatch(fetchFacts(facts));
        });
};

