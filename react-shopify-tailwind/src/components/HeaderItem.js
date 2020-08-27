import React, { Component } from "react";
import Link from "next/link";

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };

    // add a space behind the last style class for some reason
    this.hoverStyle = "float-right ml-6 cursor-pointer ".concat(
      this.props.fontSize + " "
    );
  }

  handleMouseHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  render() {
    return (
      <div>
        <span
          className={this.hoverStyle.concat(
            this.state.isHovered ? "underline" : ""
          )}
          onMouseLeave={this.handleMouseHover}
          onMouseEnter={this.handleMouseHover}
        >
            <Link href={this.props.href} as={this.props.as}>
            {this.props.title}
            </Link>
        </span>
      </div>
    );
  }
}

HeaderItem.defaultProps = {
  fontSize: "text-xs",
  href: "/"
};

export default HeaderItem;
