import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav">
        <h1>SheaClose</h1>
        <div className="linkContainer">
          <Link to="/">Home</Link>
          <Link to="/Store">Store</Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
