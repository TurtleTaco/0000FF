import React, { Component } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Slide } from "react-slideshow-image";
import "./ProductListingCard.module.css";
import fontStyle from "./Font.module.css";

class ProductListingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isHovered: false,
    };

    // This is the image displayed by default on the product listing page
    this.itemFrontImage = props.thumbnail;
    // This is the array of images displayed by hover effect
    this.images = props.imageUrls;
    this.title = props.title;
    this.size = this.images.length;
    this.price = props.price;

    // Styling
    this.leftArrowStyle = "arrowgroup absolute";
    this.rightArrowStyle = "absolute arrowgroup right-0";
    this.dotStyle = "absolute flex justify-center bottom-0 w-full z-10 pb-2";
  }

  HandleLeftArrowClick = () => {
    this.setState({
      index: this.state.index === 0 ? this.size - 1 : this.state.index - 1,
    });
  };

  HandleRightArrowClick = () => {
    this.setState({
      index: (this.state.index + 1) % this.size,
    });
  };

  HandleDotClick = (updatedIndex) => {
    console.log(updatedIndex);
    this.setState({
      index: updatedIndex,
    });
  };

  handleProductCardMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
    console.log("oh yea");
  };

  handleProductCardMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
    console.log("oh shit");
  };

  render() {
    // Slide show properties
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 250,
      arrows: true,
      infinite: true,
      // indicators: (i) => <div className="indicator">{i + 1}</div>
      prevArrow: (
        <ChevronLeftIcon
          className={this.leftArrowStyle}
          // onClick={this.HandleLeftArrowClick}
          style={{ fontSize: `30px` }}
        />
      ),
      nextArrow: (
        <ChevronRightIcon
          className={this.rightArrowStyle}
          // onClick={this.HandleRightArrowClick}
          style={{ fontSize: `30px` }}
        />
      ),
    };

    // Dot indicator (temporarily unused)
    var dotIndicator = [];
    var dotStyle = "ml-1 dot ";
    for (var i = 0; i < this.size; i++) {
      dotIndicator.push(
        <span
          className={dotStyle.concat(
            i === this.state.index ? "bg-white" : "bg-gray-400"
          )}
        ></span>
      );
    }

    return (
      <div
        className="relative cursor-default"
        style={{ width: `100%` }}
        onMouseLeave={this.handleProductCardMouseLeave}
        onMouseEnter={this.handleProductCardMouseEnter}
      >
        <div className="cursor-default">
          {/* <div className={this.state.isHovered ? "block lg:hidden" : "block"}> */}
          <img
            className="cursor-default"
            key={this.images[this.state.index]}
            src={this.itemFrontImage}
            alt=""
          />
          {/* </div> */}

          <div
            className={
              this.state.isHovered
                ? "left-0 top-0 absolute w-full z-10 hidden lg:block"
                : "absolute hidden"
            }
          >
            <div
              style={{
                boxShadow: `3px 3px 3px -5px #999, 3px 3px 3px -5px #999, -3px 3px 3px -5px #999`,
              }}
            >
              <div className="slide-container cursor-default">
                <Slide ref={this.slideRef} {...properties}>
                  {this.images.map((each, index) => (
                    <div key={index} className="each-slide">
                      <img className="lazy" src={each} alt="sample" />
                    </div>
                  ))}
                </Slide>
              </div>
              <div style={{ backgroundColor: `#FFFFFF` }}>
                <div className="flex justify-center">
                  <div className="text-base pt-1 ProductPageFont">
                    Hawaiian Shirt
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className="text-base text-gray-500 pt-2 pb-2 ProductPageFont">
                    C$ 1,350
                  </div>
                </div>
                <div className="justify-center hidden md:flex">
                  <div className="text-sm pb-4 ProductPageFont">SHOP THIS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          // className={this.state.isHovered ? "block" : "block"}
          style={{ backgroundColor: `#E7E7E7` }}
        >
          <div className="flex justify-center">
            <div className="text-base pt-1 ProductPageFont">Hawaiian Shirt</div>
          </div>
          <div className="flex justify-center ">
            <div className="text-base text-gray-500 pt-2 pb-2 ProductPageFont">
              C$ 1,350
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListingCard;
