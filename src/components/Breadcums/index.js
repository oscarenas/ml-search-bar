import React from "react";
import { Link } from "react-router-dom";
import "./Breadcum.scss";
export default function Breadcums(props) {
  function NumberList() {
    if (props.category.length) {
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
