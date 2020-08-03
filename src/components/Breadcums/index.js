import React from "react";
import "./Breadcum.scss";

/**
 * ```
 * Breadcums(props)
 * ```
 * - Set the `<Breadcum />` element according to the requeriments
 * @param   {Object} props  Props inherited from the parent container
 * @returns {Element} `<Breadcum />`
 */
export default function Breadcums(props) {
  function NumberList() {
    if (props.category) {
      const listItems = props.category.map((category, index) => (
        <li
          key={index}
          className={props.category.length - 1 === index ? "is-active" : null}
        >
          <a
            className="ml-navbar-item ml-navbar-logo"
            onClick={() => redirectCategory(category)}
          >
            {category}
          </a>
        </li>
      ));
      return <>{listItems}</>;
    } else {
      return <div></div>;
    }
  }

  /**
   * ```
   * redirectCategory(category)
   * ```
   * - Redirect to the new category
   * @param   {String} category  Redirect to the category
   */
  function redirectCategory(category) {
    window.location.replace(`/items?search=${category}`);
  }

  return (
    <div className="columns ml-breadcum">
      <div className="column is-gapless is-1 is-mobile"></div>
      <div className="column is-gapless is-11 is-mobile">
        <nav
          className="breadcrumb has-succeeds-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <NumberList />
          </ul>
        </nav>
      </div>
    </div>
  );
}
