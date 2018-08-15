import React, { Component } from "react";
import { GET_PRODUCTS } from "../queries";
import { Query } from "react-apollo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, data: { products } }) => {
          // console.log("products: ", products);
          if (loading) {
            return <div>loading...</div>;
          }
          let saleItems = products.filter(prod => prod.sale).map(prod => (
            <Card
              onClick={() => this.props.history.push(`/product/${prod.id}`)}
              className="card"
              key={prod.id}
            >
              <CardContent>
                <img height="150" src={"/" + prod.img_url} alt={prod.title} />
                <h3>{prod.name}</h3>
                <p>${prod.price}</p>
              </CardContent>
            </Card>
          ));
          return (
            <div>
              <div>
                <img className="splash" src="./static/Splash.png" alt="" />
              </div>
              <div className="cardCont">{saleItems}</div>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Home;
