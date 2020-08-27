import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";

// Import components
import App from "./App";
import ProductListing from "./ProductListing"
import ProductCard from "./ProductListingCard"

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<ProductListing />, document.getElementById("root"));
//ReactDOM.render(<ProductCard />, document.getElementById("root"));
