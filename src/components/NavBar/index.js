import React, { useRef, useEffect, useState } from "react";
import "./NabBar.scss";
import Logo from "../../static/images/Logo_ML.png";
import { Link, useHistory } from "react-router-dom";
function NavBar(props) {
  let history = useHistory();
  const [ItemSearch, setItemSearch] = useState("");
  const searchInput = useRef(null);

  function handleSubmit(item) {
    setItemSearch(searchInput.current.value);
    window.location.replace(`/items?search=${searchInput.current.value}`);
  }

  useEffect(() => {
    searchInput.current.focus();
    searchInput.current.value =
      history.location.search === ""
        ? ""
        : decodeURIComponent(history.location.search.split("?search=")[1]);
  }, []);

  return (
    <nav className="ml-navbar is-primary">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-1 is-mobile"></div>
          <div className="column is-1 is-mobile ml-navbar-brand">
            <div className="ml-navbar-brand">
              <Link className="ml-navbar-item ml-navbar-logo" to="/">
                <img
                  src={Logo}
                  alt="Mercado Libre | Search Bar test"
                  title="Mercado Libre"
                />
              </Link>
            </div>
            <div
              id="navbarExampleTransparentExample"
              className="ml-navbar-menu"
            ></div>
          </div>
          <div className="column is-9">
            <div className="ml-navbar-start">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <label htmlFor={searchInput}>
                    <input
                      className="ml-navbar-input input"
                      type="text"
                      placeholder="Nunca dejes de buscar"
                      id="buscador"
                      ref={searchInput}
                    />
                  </label>
                </p>
                <p className="control">
                  <a
                    className="button ml-navbar-button"
                    onClick={() => handleSubmit(searchInput.current.value)}
                  ></a>
                </p>
              </div>
            </div>
          </div>
          <div className="column is-1 is-mobile"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
