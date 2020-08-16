import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Header from "./Header";
import Collage from "./Collage";
import Deck from "./Deck";
import "./Dropdown.css";

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
    var hoverStyle;
    if (this.state.menuItemHover) {
      hoverStyle = "text-center pl-5 py-2 text-xs text-black bg-white";
    } else {
      hoverStyle = "text-center pl-5 py-2 text-xs text-white bg-black";
    }

    return (
      <div className="min-w-full bg-grey-500 ">
        <div className="text-center py-2 bg-gray-400 text-black text-xs underline">
          {" "}
          Covid-19 Store Update{" "}
        </div>
        <Header />

        <div className="px-8">
          <img
            className="w-full"
            src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/yellow-926728_3.jpg?v=1597542845"
          />
        </div>

        <Collage></Collage>

        <div
          id="deck"
          className="bg-white flex justify-center text-gray-800 rounded-xl relative"
          style={{
            width: `100vw`,
            height: `105vh`,
          }}
        >
          <Deck></Deck>
        </div>
      </div>
    );
  }
}

export default App;
