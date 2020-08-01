import React from "react";
import "./NabBar.scss";
import Logo from "../../static/images/Logo_ML.png";
function NavBar() {
  return (
    <>
      <nav className="ml-navbar is-primary">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-1 is-mobile"></div>
            <div className="column is-1 is-mobile ml-navbar-brand">
              <div className="ml-navbar-brand">
                <a className="ml-navbar-item" href="#!">
                  <img
                    src={Logo}
                    alt="Bulma: a modern CSS framework based on Flexbox"
                  />
                </a>
                <div
                  className="navbar-burger burger"
                  data-target="navbarExampleTransparentExample"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                id="navbarExampleTransparentExample"
                className="ml-navbar-menu"
              ></div>
            </div>
            <div className="column is-9">
              <div className="navbar-start">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Find a repository"
                    />
                  </div>
                  <div className="control">
                    <a className="button ml-navbar-search-button">Search</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-1 is-mobile"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
