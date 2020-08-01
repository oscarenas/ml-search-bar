import React, { Component } from "react";
import "./styles/App.scss";

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
      <>
        <section className="section">
          <div className="container is-fluid">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              Mercado Libre <strong>Search item </strong>!
            </p>
            <div className="columns">
              <div className="column">First column</div>
              <div className="column">Second column</div>
              <div className="column">Third column</div>
              <div className="column">Fourth column</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
