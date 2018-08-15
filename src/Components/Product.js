import React, { Component } from "react";
import { GET_PRODUCTS, ADD_TO_CART } from "../queries";
import { Query, Mutation } from "react-apollo";
import Button from "@material-ui/core/Button";

import "./Product.css";
class Product extends Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <Query query={GET_PRODUCTS} variables={{ id }}>
        {({ loading, data: { products = [] } }) => {
          let [product] = products || {};
          if (loading) return <div>loading...</div>;
          else
            return (
              <div className="container">
                <img src={"../" + product.img_url} alt="" />
                <h2>{product.name}</h2>
                <h2>${product.price}</h2>
                <h2>Category: {product.category}</h2>
                <h2>Description: {product.desc}</h2>
                <Mutation mutation={ADD_TO_CART} variables={{ id: product.id }}>
                  {(addToCart, { data }) => {
                    console.log("data: ", data);
                    return (
                      <Button
                        onClick={addToCart}
                        color="primary"
                        variant="contained"
                      >
                        Add to cart
                      </Button>
                    );
                  }}
                </Mutation>
              </div>
            );
        }}
      </Query>
    );
  }
}
export default Product;
