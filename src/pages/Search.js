import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    console.log(props.location);
  }

  render() {
    return <div>SEARCH PRODUCT {this.props.location.search}</div>;
  }
}

export default Search;
