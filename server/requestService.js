const axios = require("axios");
const BASE_URL = `https://api.mercadolibre.com`;
let PRODUCT = require("./constants/responseFormat");
const AUTHOR = {
  NAME: "OSCAR",
  LAST_NAME: "ARENAS",
};
module.exports = {
  /**
   * ```
   * searchItems(searchItem)
   * ```
   * - Search for a product list by name
   * @param {string} searchItem - Name of product.
   */
  searchItems: async (searchItem) => {
    try {
      const URL = `${BASE_URL}/sites/MLA/search?q=${searchItem}`;

      const response = await axios.get(URL).then((search) => {
        return getListItems(search);
      });
      return response;
    } catch (error) {
      console.error(error); // 🧨💣
    }

    function getListItems(search) {
      const tmpItems = search.data.results;
      const loop = tmpItems.length < 4 ? tmpItems.length : 4;
      const tmpItemInfo = [];

      PRODUCT.LIST.author.name = AUTHOR.NAME;
      PRODUCT.LIST.author.lastname = AUTHOR.LAST_NAME;

      if (search.data.filters.length) {
        const tmpCategories = search.data.filters[0].values[0].path_from_root;
        PRODUCT.LIST.categories = tmpCategories.map((data) => {
          return data.name;
        });
      } else {
        PRODUCT.LIST.categories = [];
      }

      for (let index = 0; index < loop; index++) {
        const tmpItemData = {};
        const element = tmpItems[index];

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

      PRODUCT.LIST.items = tmpItemInfo;
      return PRODUCT.LIST;
    }
  },

  /**
   * ```
   * getItemById(itemId)
   * ```
   * - Search for a product info and product description by ID.
   * @param {string} itemId - ID of product.
   */
  getItemById: async (itemId) => {
    const URL_ITEM_ID = `${BASE_URL}/items/${itemId}`;
    const URL_ITEM_DESC = `${BASE_URL}/items/${itemId}/description`;

    try {
      const productDataId = axios(URL_ITEM_ID);
      const productDesc = axios(URL_ITEM_DESC);

      // await all three promises to come back and destructure the result into their own variables
      const [product, desc] = await Promise.all([productDataId, productDesc]);

      return getInfo([product.data, desc.data]);
    } catch (e) {
      console.error(e); // 🧨💣
    }

    /**
     * ```
     * getInfo([product, description])
     * ```
     * - Set the response Object for the service and according to the requeriments
     * @param {Object} product - Product response service.
     * @param {Object} description - Descriptions response service.
     */
    function getInfo([product, description]) {
      PRODUCT.ITEM.author.name = AUTHOR.NAME;
      PRODUCT.ITEM.author.lastname = AUTHOR.LAST_NAME;
      PRODUCT.ITEM.item.id = product.id;
      PRODUCT.ITEM.item.title = product.title;
      PRODUCT.ITEM.item.price.currency = product.currency_id;
      PRODUCT.ITEM.item.price.amount = product.price;
      PRODUCT.ITEM.item.price.decimals = 2;
      PRODUCT.ITEM.item.picture = product.pictures[0].secure_url;
      PRODUCT.ITEM.item.condition = product.condition;
      PRODUCT.ITEM.item.free_shipping = product.shipping.free_shipping;
      PRODUCT.ITEM.item.sold_quantity = product.sold_quantity;
      PRODUCT.ITEM.item.description = description.plain_text;

      return PRODUCT.ITEM;
    }
  },

  /**
   * ```
   * getItemDescription(itemId)
   * ```
   * - Search the product description according to its ID.
   * - 🟡 This service was required for the test.
   * @param {string} itemId - ID of product.
   */
  getItemDescription: async (itemId) => {
    try {
      const URL = `${BASE_URL}/items/${itemId}/description`;
      const response = await axios.get(URL).then((desc) => {
        return desc.data.plain_text;
      });
      return response;
    } catch (error) {
      console.error(error); // 🧨💣
    }
  },
};
