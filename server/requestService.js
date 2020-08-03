const axios = require("axios");
const BASE_URL = `https://api.mercadolibre.com`;
const AUTHOR = {
  NAME: "OSCAR",
  LAST_NAME: "ARENAS",
};

module.exports = {
  searchItems: async (searchItem) => {
    console.log("searchItem:", searchItem);
    try {
      const URL = `${BASE_URL}/sites/MLA/search?q=${searchItem}`;
      let tmpObj = {};
      const response = await axios.get(URL).then((search) => {
        if (search.data.filters.length) {
          const tmpCategories = search.data.filters[0].values[0].path_from_root;
          tmpObj.categories = tmpCategories.map((data) => {
            return data.name;
          });
        } else {
          tmpObj.categories = false;
        }
        const tmpItems = search.data.results;
        const tmpItemInfo = [];

        tmpObj.name = AUTHOR.NAME;
        tmpObj.lastname = AUTHOR.LAST_NAME;

        const loop = tmpItems.length < 4 ? tmpItems.length : 4;
        for (let index = 0; index < loop; index++) {
          const tmpItemData = {};
          const element = tmpItems[index];
          // console.log(` ${index} ${element.title}`);
          tmpItemData.id = element.id;
          tmpItemData.title = element.title;
          tmpItemData.picture = element.thumbnail;
          tmpItemData.condition = element.condition;
          tmpItemData.free_shipping = element.shipping.free_shipping;
          tmpItemData.city = element.seller_address.state.name;
          tmpItemData.price = {
            currency: element.currency_id,
            amount: element.price,
            decimals: 10,
          };
          tmpItemInfo.push(tmpItemData);
        }
        tmpObj.items = tmpItemInfo;

        return tmpObj;
        // return search.data;
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
      let tmpObj = {};
      const response = await axios.get(URL).then((item) => {
        tmpObj.name = AUTHOR.NAME;
        tmpObj.lastname = AUTHOR.LAST_NAME;

        tmpObj.item = {
          id: item.data.id,
          title: item.data.title,
          price: {
            currency: item.data.currency_id,
            amount: item.data.price,
            decimals: 2,
          },
          picture: item.data.pictures[0].secure_url,
          condition: item.data.condition,
          free_shipping: item.data.shipping.free_shipping,
          sold_quantity: item.data.sold_quantity,
        };

        return tmpObj;
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
        return desc.data.plain_text;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
