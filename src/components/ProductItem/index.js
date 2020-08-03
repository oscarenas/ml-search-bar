import React from "react";
import "./ProductItem.scss";

/**
 * ```
 * ProductItem(props)
 * ```
 * - Set the `<ProductItem />` element.
 * @param   {Object} props  Props inherited from the parent container
 * @returns {Element} `<ProductItem />`
 */
export default function ProductItem(props) {
  const { itemInfo: product } = props;

  function formatPrice(price) {
    const tmpPrice = price.amount
      .toLocaleString("en-EN", { currency: price.currency })
      .split(".")[0];
    const decimal = price.amount
      .toLocaleString("en-EN", { currency: price.currency })
      .split(".")[1];
    return (
      <>
        {tmpPrice}
        <sup className="ml-price-decimals">{decimal}</sup>
      </>
    );
  }

  return (
    <div className="columns is-gapless">
      <div className="column is-1 is-mobile"></div>
      <div className="column is-10 is-mobile">
        <div className="card ml-card-item">
          <div className="card-content ml-card-item-content">
            <div className="content">
              <div className="columns is-gapless ml-item">
                <div className="column is-1 is-mobile"></div>
                <div className="column is-7 is-mobile">
                  <figure className="image ml-product-image" tabIndex="0">
                    <img
                      src={product.item.picture}
                      alt={product.item.title}
                      title={product.item.title}
                    />
                  </figure>
                </div>
                <div className="column is-4 is-mobile">
                  <p className="ml-product-sold">
                    {product.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                    {product.item.sold_quantity} vendidos
                  </p>
                  <h1 className="ml-product-title">{product.item.title}</h1>
                  <h2 className="ml-item-price">
                    <span>$</span>
                    {formatPrice(product.item.price)}
                  </h2>
                  <div className="ml-button-buy">
                    <a tabIndex="0" className="button is-link is-fullwidth">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>

              <div className="columns is-gapless ml-item">
                <div className="column  is-mobile"></div>
              </div>

              <div className="columns is-gapless">
                <div className="column is-7 is-mobile">
                  <div className="ml-item-info">
                    <h3 className="ml-item-desc" tabIndex="0">
                      Descripción del producto
                    </h3>
                    <div className="ml-item-text" tabIndex="0">
                      {product.item.description.split("\n").map((i, key) => {
                        return (
                          <p key={key}>
                            {i}
                            <br />
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
