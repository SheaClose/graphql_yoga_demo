import React, { Component } from "react";
import routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
