import React, { Component } from "react";
import { Helmet } from "react-helmet";

/**
 * Component for home page.
 *
 * @component
 */
class Home extends Component {
  render() {
    return (
      <div>
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
          <script type="application/ld+json">
            {`
              "@context": "https://schema.org",
              "@type": "Service",
              "image": [
                  "https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png"
              ],
              "@id": "http://mercadolibre.com",
              "name": "Mercado Libre",
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Carrera 17 Numero 93 - 09 Piso 3",
                  "addressLocality": "Bogotá D.C.",
                  "addressRegion": "BOG",
                  "postalCode": "730001",
                  "addressCountry": "CO"
              },
              "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 4.68468912,
                  "longitude": -74.05204922
              },
              "telephone": "+573124567890"
          `}
          </script>
        </Helmet>
      </div>
    );
  }
}

export default Home;
