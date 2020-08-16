import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from "./Header";
import Collage from "./Collage";
import Deck from "./Deck";
import "./Dropdown.css";
import "./Footer.css"
import HeaderItem from "./HeaderItem";

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

        <div className="flex-col">
          <div className="flex mb-32">
            <HeaderItem title='Policies'/>
            <HeaderItem title='Customer Service' />
            <HeaderItem title='Company' />
            <HeaderItem title='Privacy' />
          </div>
          <div className="flex ml-6 mb-5">

            <div id="FooterTextBrand" className="flex-1 text-sm float-right">@2020 #0000FF</div>
            <FacebookIcon
              className="float-right ml-3"
              onClick={this.handleHeaderMenuClick}
            />
             <InstagramIcon
              className="float-right ml-3"
              onClick={this.handleHeaderMenuClick}
            />
             <TwitterIcon
              className="float-right ml-3 mr-12"
              onClick={this.handleHeaderMenuClick}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
