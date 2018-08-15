import React, { Component } from "react";
import routes from "./routes";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
