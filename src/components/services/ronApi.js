export const getFacts = count => {
  console.log('api being fetch');
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
    .then(res => res.json());
};
