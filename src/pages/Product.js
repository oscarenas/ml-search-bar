import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";
import Breadcums from "../components/Breadcums";
import axios from "axios";

/**
 * Component for Product page.
 *
 * @component
 */
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.match.params.id,
      productData: {},
      load: false,
    };
  }

  componentDidMount() {
    this.getItemData();
  }

  async getItemData() {
    const res = await axios
      .get(`/api/items/${this.state.productId}`)
      .then((response) => {
        this.setState({ productData: response.data.item });
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
              <title>{`Mercado Libre | ${this.state.productData.item.title}`}</title>
              <meta
                property="og:image"
                content={`"${this.state.productData.item.picture}"`}
              />
              <meta
                name="description"
                content={`${this.state.productData.item.title}`}
              />
              <script type="application/ld+json">
                {`
              "@context": "https://schema.org",
              "@type": "Service",
              "image": [
                "${this.state.productData.item.picture}"
              ],
              "@id": "http://mercadolibre.com",
              "name": "Mercado Libre | ${this.state.productData.item.title}",
              "description": "${this.state.productData.item.description}",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "reviewCount": "89"
              },
              "offers": {
                "@type": "Offer",
                "url": "${window.location}",
                "priceCurrency": "${this.state.productData.item.price.currency}",
                "price": "${this.state.productData.item.price.amount}",
                "priceValidUntil": "2020-12-31",
                "itemCondition": "https://schema.org/UsedCondition",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Vendor Name"
                }
              }
          `}
              </script>
            </Helmet>
            <Breadcums
              category={this.props.location.state.categories.productCategory}
            />
            <ProductItem itemInfo={this.state.productData} />
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Product;
