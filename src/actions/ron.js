

//////////////////////////////////////////////////////////////////////////////////////
// Use the http://ron-swanson-quotes.herokuapp.com/v2/quotes API

// create src/services/ronApi.js
// create a getFacts function that takes a number of facts to fetch
// http://ron-swanson-quotes.herokuapp.com/v2/quotes/100
// create src/action/ron.js
// create a fetchFacts actionCreator
// use the thunk middleware to fetch from the ronApi
// the actionCreator is a function that takes the number of quotes to fetch and returns a function that takes dispatch. Once the fetch is complete dispatch an action
// const fetchFacts = count => dispatch => {
//   // fetch from API
//   // .then dispatch an action where the payload is the result of the fetch
//   // actions are objects with { type, payload }
//   //
// }
// update the src/reducers/ron.js reducer to handle your action
