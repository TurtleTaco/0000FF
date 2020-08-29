import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DropdownItem from "./DropdownItem";
import HeaderItem from "./HeaderItem";
import styles from "./Dropdown.module.css";
import HeaderStyles from "./Header.module.css";
import "./Font.module.css";
import Link from "next/link";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false,
      womanDropdownOpen: false,
    };

    this.wrapperRef = React.createRef();
    this.dropdownStyle = "absolute w-screen z-10 ";
    this.headerImageUrl = "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/black_transparent.png?v=1598671285";
  }

  handleHeaderMenuClick = () => {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        menuOpened: false,
      });
    }
  };

  handleWindowScroll = () => {
    var scroll = window.pageYOffset; 
          var pageHeaderImage = document.getElementById("header-image-container");
          var pageHeaderOptions = document.getElementById("header-options")
        
          if(scroll > this.props.shrinkOffset){
              //pageHeaderImage.style["display"] = "none";
              pageHeaderImage.classList.remove(HeaderStyles.headerOpened);
              pageHeaderImage.classList.add(HeaderStyles.headerClosed);
              pageHeaderOptions.style["background-color"] = "black";
              pageHeaderOptions.style["color"] = "white";
          } else if(scroll == 0){
              //pageHeaderImage.style["display"] = "block";
              pageHeaderImage.classList.remove(HeaderStyles.headerClosed);
              pageHeaderImage.classList.add(HeaderStyles.headerOpened);
              pageHeaderOptions.style["background-color"] = "transparent";
              pageHeaderOptions.style["color"] = "black";
          } 
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("scroll", this.handleWindowScroll); 
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  render() {

    return (
      <div id="header" className="sticky top-0 z-20" ref={this.wrapperRef}>
        {/* Header In Small Screen */}
        <div
          className="flex items-center mt-1 md:hidden"
          style={{
            backgroundColor: `white`,
          }}
        >
          <div className="flex-shrink-0 px-4">
            <Link href="/">
              <img
                className="w-32 py-3"
                src={this.headerImageUrl}
                style={{ width: `100px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="flex-1 px-4 py-2 block">
            <MenuIcon
              className="float-right ml-3 cursor-pointer"
              onClick={this.handleHeaderMenuClick}
            />
            <SearchIcon className="float-right ml-3 cursor-pointer" />
          </div>
        </div>

        {/* Header In Large Screen */}
        <div className="flex flex-col justify-center">
          <div className="hidden px-4 justify-center md:flex md:justify-center">
            <Link href="/">
              <div id="header-image-container">
                <img
                  className="w-32 py-3"
                  src={this.headerImageUrl}
                  style={{ width: `150px`, height: `auto` }}
                />
              </div>
            </Link>
          </div>

          <div
            id="header-options"
            className=" hidden px-10 py-2 md:flex md:flex-row md:justify-center FrontPageShopButtonFont"
          >
            <div>
              <HeaderItem title="Search" />
            </div>
            <div>
              <HeaderItem title="Woman" />
            </div>
            <div>
              <HeaderItem title="Man" href="/[type]" as="/productlistingpage" />
            </div>
            <div>
              <HeaderItem title="New Releases" />
            </div>
          </div>
        </div>

        {/* Header Dropdown In Small Screen*/}
        {
          <div
            className={this.dropdownStyle.concat(
              this.state.menuOpened
                ? styles.dropdownOpened
                : styles.dropdownClosed
            )}
          >
            <ul>
              <DropdownItem title="Man" />
              <DropdownItem title="Woman" />
              <DropdownItem title="New Releases" />
              <DropdownItem title="Contact" />
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Header;
