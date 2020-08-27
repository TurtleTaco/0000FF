import React, { Component } from "react";
import Header from "./Header";
//import "./Dropdown.css";
//import "./Font.css";
import MainPage from "./MainPage";
import ProductListing from "./ProductListing";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      manDropdownOpen: false,
      womanDropdownOpen: false,
      menuItemHover: false,
    };
  }

  handleHeaderChildClick = () => {
    this.setState({
      manDropdownOpen: !this.state.manDropdownOpen,
    });
  };

  handleDropdownItemMouseHover = () => {
    this.setState({
      menuItemHover: !this.state.menuItemHover,
    });
  };

  openHeaderDropdown() {
    console.log("Open");
  }

  render() {
    return (
    <Router>
      <div id="container" className="min-w-full bg-grey-500 ">
        <div className="text-center py-2 bg-gray-400 text-black text-xs underline FrontPageShopButtonFont">
          {" "}
          Covid-19 Store Update{" "}
        </div>

        <Header />

        <Switch>
          <Route exact path="/search">
            <MainPage /> 
          </Route>
          <Route path="/manlisting">
            <ProductListing />
          </Route>
          <Route path="/womanlisting">
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
