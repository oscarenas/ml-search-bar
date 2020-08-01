import React, { Component } from "react";

export class Product extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Product</h1>
      </div>
    );
  }
}

export default Product;
