import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Collage from "./Collage";
import Deck from "./Deck";
import HeaderItem from "./HeaderItem";
import styles from "./Deck.module.css";
import fontStyle from "./Font.module.css";

class MainPage extends Component {
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
      <div id="container" className="min-w-full bg-grey-500 cursor-default">
        <div
          className="p-4 cursor-default"
          style={{
            width: `100vw`,
            height: `100vh`,
          }}
        >
          <div
            className={styles.deckContainer.concat(
              " z-0 justify-center text-gray-800 rounded-xl relative cursor-default pt-8"
            )}
            style={{
              width: `100%`,
              height: `100%`,
              backgroundColor: `#E7E7E7`,
            }}
          >
            <Deck></Deck>
            <button
              className="object-none object-bottom bg-black py-2 px-10 text-white text-sm ProductPageFont cursor-pointer"
              // Useful styling to position a div at the bottom center without knowing its width
              style={{
                position: `absolute`,
                left: `50%`,
                bottom: `15px`,
                transform: `translate(-50%, -50%)`,
                margin: `0 auto`,
              }}
            >
              <span>SHOP NOW</span>
            </button>
          </div>
        </div>

        <div className="z-10">
          <Collage></Collage>
        </div>

        <div className="flex-col px-8 mt-2">
          <div className="flex mb-32 FrontPageShopButtonFont">
            <div className="-ml-6">
              <HeaderItem title="Policies" />
            </div>
            <HeaderItem title="Service" />
            <HeaderItem title="Company" />
            <HeaderItem title="Privacy" />
          </div>
          <div className="flex mb-5">
            <div className="flex-1 text-xs float-right FrontPageShopButtonFont">
              @2020 #0000FF
            </div>

            <div className="flex-1 float-right ">
              <FacebookIcon
                className="float-right ml-3"
                onClick={this.handleHeaderMenuClick}
              />
              <InstagramIcon
                className="float-right ml-3"
                onClick={this.handleHeaderMenuClick}
              />
              <TwitterIcon
                className="float-right ml-3"
                onClick={this.handleHeaderMenuClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
