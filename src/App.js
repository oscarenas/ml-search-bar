import React, { Component } from "react";
import "./styles/App.scss";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/items?q=${encodeURIComponent(this.state.name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  }

  render() {
    return (
      <Router>
        <NavBar />
        <section className="section">
          <div className="container is-fluid">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/items/:id" exact component={Product} />
              <Route path="/items" exact component={Search} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
