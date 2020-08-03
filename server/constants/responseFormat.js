/**
 * Set Object product item according to the requirements
 * @type {Object}
 */
let ITEM = {
  author: {
    name: new String(),
    lastname: new String(),
  },
  item: {
    id: new String(),
    title: new String(),
    price: {
      currency: new String(),
      amount: new Number(),
      decimals: new Number(),
    },
    picture: new String(),
    condition: new String(),
    free_shipping: new Boolean(),
    sold_quantity: new Number(),
    description: new String(),
  },
};

/**
 * Set Object product list according to the requirements
 * @type {Object}
 */
let LIST = {
  author: {
    name: new String(),
    lastname: new String(),
  },
  categories: new Array(),
  items: [
    {
      id: new String(),
      title: new String(),
      price: {
        currency: new String(),
        amount: new Number(),
        decimals: new Number(),
      },
      picture: new String(),
      condition: new String(),
      free_shipping: new Boolean(),
    },
  ],
};

module.exports = { ITEM, LIST };
