import React from "react";
import "./Loader.scss";

/**
 * ```
 * Loader()
 * ```
 * - Set the `<Loader />` element.
 * @returns {Element} `<Loader />`
 */
export default function Loader() {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <div className="ml-loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
