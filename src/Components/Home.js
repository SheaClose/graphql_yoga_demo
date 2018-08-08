import React, { Component } from "react";
import client from "./client";
import { GET_PRODUCTS } from "./queries";
class Home extends Component {
  async componentDidMount() {
    try {
      let {
        data: { products }
      } = await client.query({
        query: GET_PRODUCTS,
        variables: { category: "shoe" }
      });
      this.setState({ products });
    } catch (error) {
      console.log("error: ", error);
    }
  }
  render() {
    return (
      <div className="">
        <h1>Home</h1>
      </div>
    );
  }
}
export default Home;
