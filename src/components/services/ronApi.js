export const getFacts = (number) => {
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${number}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      facts: json.facts
    }));
};
