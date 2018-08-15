import React from "react";
import { render } from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";

let client = new ApolloClient({
  uri: process.env.REACT_APP_SEVERHOST + "/graphql"
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
