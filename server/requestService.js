const axios = require("axios");
const BASE_URL = `https://api.mercadolibre.com`;

module.exports = {
  searchItems: async (searchItem) => {
    console.log("searchItem:", searchItem);
    try {
      const URL = `${BASE_URL}/sites/MLA/search?q=${searchItem}`;
      const response = await axios.get(URL).then((search) => {
        return search.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getItemById: async (itemId) => {
    console.log("itemId:", itemId);
    try {
      const URL = `${BASE_URL}/items/${itemId}`;
      const response = await axios.get(URL).then((item) => {
        return item.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getItemDescription: async (itemId) => {
    console.log("itemId:", itemId);
    try {
      const URL = `${BASE_URL}/items/${itemId}/description`;
      const response = await axios.get(URL).then((desc) => {
        return desc.data;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
