import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Store from "./Components/Store";
import Cart from "./Components/Cart";
import { Link } from "react-router-dom";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Store" component={Store} />
    <Route path="/Product/:id" component={Product} />
    <Route path="/Cart" component={Cart} />
    <Route
      path="*"
      render={() => (
        <div>
          <h1>404 page not found</h1>
          <Link to="/">return home</Link>
        </div>
      )}
    />
  </Switch>
);
