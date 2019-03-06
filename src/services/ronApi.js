export const getFacts = numberOfFacts => {
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${numberOfFacts}`)
    .then(res => {
      return res.json();
    });
};
