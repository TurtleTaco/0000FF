import React, { Component } from "react";
import ProductListingCard from "./ProductListingCard";
import DropdownItem from "./DropdownItem";
import "./ProductListingCard.css";
import "./Dropdown.css";
import "./Font.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterDropdownOpened: false,
      sortDropdownOpened: false,
    };
    this.sortDropdownWidthMediunScreen = "w-2/12";
    this.filterDropdownWidthMediunScreen = "w-2/12";
    this.navigationWidthMediunScreen = "w-8/12";

    this.sortDropdownWidthSmallScreen = "w-4/12";
    this.filterDropdownWidthSmallScreen = "w-4/12";
    this.navigationWidthSmallScreen = "w-4/12";
    this.products = [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ];
  }

  HandleFilterHoverEventChange = () => {
    this.setState({
      filterDropdownOpened: !this.state.filterDropdownOpened,
      sortDropdownOpened: false,
    });
  };

  HandleSortHoverEventChange = () => {
    this.setState({
      sortDropdownOpened: !this.state.sortDropdownOpened,
      filterDropdownOpened: false,
    });
  };

  HandleNavigationMouseLeaveEventChange = () => {
    this.setState({
      sortDropdownOpened: false,
      filterDropdownOpened: false,
    });
  };

  render() {
    let sortOptions = [
      <DropdownItem title="Price" />,
      <DropdownItem title="Name" />,
      <DropdownItem title="Release Time" />,
    ];

    let filterOptions = [
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
      <div className="flex-1">hahaha</div>,
    ];

    let products = this.products.map((product) => {
      return (
        <div className="w-1/2 pr-px pl-px pb-px inline-block md:w-1/3 lg:w-1/4">
          <ProductListingCard />
        </div>
      );
    });

    return (
      <div className="absolute w-full">
        <div
          className="mx-3"
          onMouseLeave={this.HandleNavigationMouseLeaveEventChange}
          style={{}}
        >
          <div
            className={`${this.navigationWidthSmallScreen} md:${this.navigationWidthMediunScreen} pl-6 inline-block text-left text-xs FrontPageShopButtonFont`}
          >
            All <ArrowRightIcon style={{ marginBottom: `2px` }} />
          </div>

          <div
            className={`${this.navigationWidthSmallScreen} md:${this.filterDropdownWidthMediunScreen} inline-block`}
            onMouseEnter={this.HandleFilterHoverEventChange}
          >
            <div
              className={`underline text-center text-xs FrontPageShopButtonFont my-2`}
              style={{
                borderRight: `1px solid #a0acc0`,
                borderLeft: `1px solid #a0acc0`,
              }}
            >
              Filter
              <ArrowDropDownIcon />
            </div>
          </div>

          <div
            className={`${this.sortDropdownWidthSmallScreen} md:${this.sortDropdownWidthMediunScreen} inline-block`}
            onMouseEnter={this.HandleSortHoverEventChange}
          >
            <div
              className={`w-full inline-block text-center text-xs FrontPageShopButtonFont my-2`}
              style={{ borderRight: `1px solid #e2e8f0` }}
            >
              Sort by : Name
              <ArrowDropDownIcon />
            </div>

            <div
              className={`hidden md:block relative w-screen md:w-full ${this.sortDropdownWidthMediunScreen}`}
              onMouseLeave={this.HandleSortHoverEventChange}
            >
              <div
                className={"absolute z-10 w-full ".concat(
                  this.state.sortDropdownOpened
                    ? "dropdownOpened"
                    : "dropdownClosed"
                )}
                style={{ left: `md:500%` }}
              >
                <ul>{sortOptions}</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen">
          <div
            className={"z-10 w-full bg-black ".concat(
              this.state.filterDropdownOpened ? "absolute" : "hidden"
            )}
            onMouseLeave={this.HandleFilterHoverEventChange}
          >
            <div className="flex flex-col">{filterOptions}</div>
          </div>

          <div
            className={`block w-full md:hidden`}
            onMouseLeave={this.HandleSortHoverEventChange}
          >
            <div
              className={"absolute z-10 w-full ".concat(
                this.state.sortDropdownOpened
                  ? "dropdownOpened"
                  : "dropdownClosed"
              )}
            >
              <ul>{sortOptions}</ul>
            </div>
          </div>
        </div>

        <div className="mx-1 md:w-full">{products}</div>
      </div>
    );
  }
}

export default ProductListing;
