import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import Breadcums from "../components/Breadcums";
import axios from "axios";

/**
 * Component for Search page.
 *
 * @component
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: props.location.search.split("?search=")[1],
      searchData: {},
      load: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const res = await axios
      .get(`/api/items?q=${this.props.location.search.split("?search=")[1]}`)
      .then((response) => {
        this.setState({ searchData: response.data.search });
        this.setState({ load: true });
      });
    return await res;
  }

  render() {
    return (
      <>
        {this.state.load ? (
          <>
            <Helmet>
              <title>Mercado libre | Search Items test</title>
              <meta
                property="og:image"
                content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png"
              />
              <meta
                name="description"
                content="La comunidad de compra y venta online más grande de América Latina."
              />
            </Helmet>
            <Breadcums category={this.state.searchData.categories} />
            <ProductList data={this.state.searchData} />
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Search;
