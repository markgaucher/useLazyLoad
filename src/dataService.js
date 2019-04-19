import queryString from "query-string";

export default {
  fetchBeerList: async params => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?${queryString.stringify(params)}`
    );
    return await response.json();
  }
};
