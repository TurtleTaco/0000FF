import React, { useState, Component } from "react";
import ProductListingCard from "../components/ProductListingCard";
import DropdownItem from "../components/DropdownItem";
import Header from "../components/Header";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import styles from "../components/Dropdown.module.css";
import Client from "shopify-buy";

function ProductListing({ productsJson }) {
  const [isFilterOpened, setFilterOpenStatus] = useState(false);
  const [isSortOpened, setSortOpenStatus] = useState(false);

  let productObjects = JSON.parse(productsJson);

  var sortDropdownWidthMediunScreen = "w-2/12";
  var filterDropdownWidthMediunScreen = "w-2/12";
  var navigationWidthMediunScreen = "w-8/12";

  var sortDropdownWidthSmallScreen = "w-4/12";
  var navigationWidthSmallScreen = "w-4/12";

  let sortOptions = [
    <DropdownItem title="Price" />,
    <DropdownItem title="Name" />,
    <DropdownItem title="Release Time" />,
  ];

  let filterOptions = [
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,
  ];

  let displayProducts = productObjects.map((product) => {
    let urls = [];
    product.images.map((image) => {
      urls.push(image.src);
    });
    return (
      <div className="w-1/2 pr-px pl-px pb-px inline-block md:w-1/3 lg:w-1/4">
        <ProductListingCard
          thumbnail={urls.shift()}
          imageUrls={urls}
          title={product.title}
          description={product.description}
          price={product.variants[0].price}
        />
      </div>
    );
  });

  let HandleFilterHoverEventChange = () => {
    setFilterOpenStatus(!isFilterOpened);
    setSortOpenStatus(false);
  };

  let HandleSortHoverEventChange = () => {
    setFilterOpenStatus(false);
    setSortOpenStatus(!isSortOpened);
  };

  let HandleNavigationMouseLeaveEventChange = () => {
    setFilterOpenStatus(false);
    setSortOpenStatus(false);
  };

  const client = Client.buildClient({
    storefrontAccessToken: "7301dedacfd3710acf80b7325d95a259",
    domain: "richmofo.myshopify.com",
  });

  return (
    <div className="absolute w-full">
      <Header shrinkOffset="40"/>

      <div
        className="mx-1 bg-gray-100"
        onMouseLeave={HandleNavigationMouseLeaveEventChange}
        style={{
            borderTop: `0px solid black`,
            borderBottom: `0px solid black`
          }}
      >
        <div
          className={`${navigationWidthSmallScreen} md:${navigationWidthMediunScreen} inline-block pl-6 text-left text-xs FrontPageShopButtonFont`}
        >
          All <ArrowRightIcon style={{ marginBottom: `2px` }} />
        </div>

        <div
          className={`${navigationWidthSmallScreen} md:${filterDropdownWidthMediunScreen} inline-block`}
          onMouseEnter={HandleFilterHoverEventChange}
        >
          <div
            className={`text-center text-xs FrontPageShopButtonFont my-1 `}
            style={{
              borderRight: `2px solid white`,
              borderLeft: `2px solid white`,
            }}
          >
            Filter <ArrowDropDownIcon />
          </div>

          <div
            className={`hidden relative md:block md:w-full ${filterDropdownWidthMediunScreen}`}
            onMouseLeave={HandleFilterHoverEventChange}
          >
            <div
              className={"absolute z-10 w-full ".concat(
                isFilterOpened ? styles.dropdownOpened : styles.dropdownClosed
              )}
            >
              <ul>{filterOptions}</ul>
            </div>
          </div>
        </div>

        <div
          className={`${sortDropdownWidthSmallScreen} md:${sortDropdownWidthMediunScreen} inline-block`}
          onMouseEnter={HandleSortHoverEventChange}
        >
          <div
            className={`w-full inline-block text-center text-xs FrontPageShopButtonFont my-1`}
          >
            Sort by : Name <ArrowDropDownIcon />
          </div>

          <div
            className={`hidden relative md:block md:w-full ${sortDropdownWidthMediunScreen}`}
            onMouseLeave={HandleSortHoverEventChange}
          >
            <div
              className={"absolute z-10 w-full ".concat(
                isSortOpened ? styles.dropdownOpened : styles.dropdownClosed
              )}
            >
              <ul>{sortOptions}</ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen md:hidden">
        <div
          className={"z-10 w-full bg-black ".concat(
            isFilterOpened ? "absolute" : "hidden"
          )}
          onMouseLeave={HandleFilterHoverEventChange}
        >
          <div className="flex flex-col">
            <ul>{filterOptions}</ul>
          </div>
        </div>

        <div
          className={"z-10 w-full bg-black ".concat(
            isSortOpened ? "absolute" : "hidden"
          )}
          onMouseLeave={HandleSortHoverEventChange}
        >
          <div className="flex flex-col">
            <ul>{sortOptions}</ul>
          </div>
        </div>
      </div>

      <div className="mx-1 mt-2">{displayProducts}</div>
    </div>
  );
}

export async function getStaticProps() {
  const client = Client.buildClient({
    storefrontAccessToken: "7301dedacfd3710acf80b7325d95a259",
    domain: "richmofo.myshopify.com",
  });

  var products;
  var callback = (res) => {
    products = res;
  };

  await client.product.fetchAll().then(callback);
  var productsJson = JSON.stringify(products);
  return { props: { productsJson } };
}

export default ProductListing;
