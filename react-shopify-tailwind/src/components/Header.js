import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DropdownItem from "./DropdownItem";
import HeaderItem from "./HeaderItem";
import styles from "./Dropdown.module.css";
import "./Font.module.css";
import Link from "next/link";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpened: false,
      womanDropdownOpen: false,
    };

    this.wrapperRef = React.createRef();
    this.dropdownStyle = "absolute w-screen z-10 ";
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

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {

    return (
      <div id="header" className="sticky top-0 z-20" ref={this.wrapperRef}>
    
        {/* Header In Small Screen */}
        <div className="flex items-center mt-1 md:hidden"
         style={{
          backgroundColor: `white`,
        }}>

          <div className="flex-shrink-0 px-4">
            <Link href="/">
              <img
                className="w-32 py-3"
                src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IconBrandSymble_e63b31bf-3290-4244-98c6-1e75efff1ef5.jpg?v=1597545211"
                style={{ width: `150px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="flex-1 px-4 py-2 block">
            <MenuIcon
              className="float-right ml-3"
              onClick={this.handleHeaderMenuClick}
            />
            <SearchIcon className="float-right ml-3" />
          </div>

        </div>

        {/* Header In Large Screen */}
        <div className="flex flex-col justify-center">
          <div className="hidden px-4 justify-center md:flex md:justify-center">
              <Link href="/">
              <div id="header-image-container">
                <img
                  className="w-32 py-3"
                  src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IconBrandSymble_e63b31bf-3290-4244-98c6-1e75efff1ef5.jpg?v=1597545211"
                  style={{ width: `150px`, height: `auto`}}
                />
              </div>
              </Link>
            </div>

            <div id="header-options" className=" hidden px-10 py-2 md:flex md:flex-row md:justify-center FrontPageShopButtonFont">
                <div>
                  <HeaderItem title="Search" />
                </div>
                <div>
                  <HeaderItem title="Woman" />
                </div>
                <div> 
                  <HeaderItem title="Man" href="/[type]" as="/productlistingpage"/>
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
