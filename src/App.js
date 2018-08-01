import React, { Component } from "react";
import logo from "./logo.svg";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";

class App extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    } else
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
  }
}

const ITEMS_QUERY = gql`
  query {
    person1: person(prop: "last_name", val: "Ney") {
      first_name
      last_name
      email
      gender
      city
      country
    }
    person2: person(prop: "last_name", val: "Kinnar") {
      first_name
      last_name
      email
      gender
      city
      country
    }
  }
`;

export default graphql(ITEMS_QUERY)(
  ({ data: { loading, person1, person2 } }) => (
    <App {...{ loading, person1, person2 }} />
  )
);

console.log("graphql(ITEMS_QUERY): ", graphql(ITEMS_QUERY));
