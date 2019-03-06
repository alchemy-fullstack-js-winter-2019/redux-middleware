export const getFacts = count =>  {
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes?page=${count}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

