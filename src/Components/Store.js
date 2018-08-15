import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_PRODUCTS } from "../queries";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Store.css";
class Store extends Component {
  render() {
    return (
      <Query query={GET_PRODUCTS} className="">
        {({ loading, data: { products = [] } }) => {
          let prods = products.map(product => (
            <Card
              onClick={() => this.props.history.push(`/product/${product.id}`)}
              className="card"
              key={product.id}
            >
              <CardContent className="card_content">
                <img src={product.img_url} alt={product.desc} />
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
              </CardContent>
            </Card>
          ));
          if (loading) return <div>loading...</div>;
          else return <div className="card_container">{prods}</div>;
        }}
      </Query>
    );
  }
}
export default Store;
