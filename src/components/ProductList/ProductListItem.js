import React from "react";
import { Link } from "react-router-dom";

import "./ProductList.scss";
import shippingIcon from "../../static/images/ic_shipping.png";

/**
 * ```
 * ProductListItem(props)
 * ```
 * - Set the `<ProductListItem />` element.
 * @param   {Object} props  Props inherited from the parent container
 * @returns {Element} `<ProductListItem />`
 */
export default function ProductListItem(props) {
  return (
    <article className="ml-media-section">
      <div className="columns is-gapless">
        <div className="column ml-media-content">
          <Link
            className="ml-navbar-item ml-navbar-logo"
            to={{
              pathname: `/items/${props.productId}`,
              state: { categories: props },
            }}
          >
            <figure className="ml-media-left">
              <img
                className="ml-media-img"
                src={props.productPicture}
                alt={props.productTitle}
                title={props.productTitle}
              />
            </figure>
          </Link>
        </div>
        <div className="column is">
          <div className="media-content">
            <div className="content">
              <h1 className="has-text-grey-darker ml-product-price">
                <span className="ml-currency">$</span>
                {new Intl.NumberFormat("en-EN", {
                  minimumFractionDigits: 0,
                }).format(props.productPrice)}
                {props.productShipping && (
                  <img
                    src={shippingIcon}
                    alt="Envio gratis"
                    title="Envio gratis"
                  />
                )}
              </h1>
              <Link
                className="ml-navbar-item ml-navbar-logo"
                to={{
                  pathname: `/items/${props.productId}`,
                  state: { categories: props },
                }}
              >
                <p className="ml-product-info">{props.productTitle}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column is-2">
          <div className="media-right">
            <div className="ml-product-city">{props.productCity}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
