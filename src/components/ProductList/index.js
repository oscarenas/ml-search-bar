import React from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.scss";
export default function ProductList(props) {
  console.log("ProductList", props);

  function ListItem() {
    return props.data.items.map((product) => (
      <ProductListItem
        key={product.id}
        productId={product.id}
        productTitle={product.title}
        productPicture={product.picture}
        productCondition={product.condition}
        productCity={product.city}
        productShipping={product.free_shipping}
        productPrice={product.price.amount}
        productCategory={props.data.categories}
      />
    ));
  }
  return (
    <div className="columns is-gapless">
      <div className="column is-1 is-mobile"></div>
      <div className="column is-10 is-mobile">
        <div className="card ml-product-card">
          <div className="card-content ml-product-card-content">
            <div className="content">
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
