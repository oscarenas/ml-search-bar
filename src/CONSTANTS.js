/* module.exports = {
  PRODUCT_ITEM: {
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
  },
};
 */
/* function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
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

module.exports = { ITEM };
//module.exports = { add, subtract, num };
