import React, { Component } from "react";
import "./DropdownItem.css";

class DropdownItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.hoverStyle = "text-center pl-5 py-2 text-xs ";
  }

  handleDropdownItemMouseHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  render() {
    return (
      <div>
        <li
          className={this.hoverStyle.concat(
            this.state.isHovered
              ? "text-black bg-gray-100 dropdownItemHovered"
              : "text-white bg-black"
          )}
          onMouseLeave={this.handleDropdownItemMouseHover}
          onMouseEnter={this.handleDropdownItemMouseHover}
        >
          {this.props.title.concat(this.state.isHovered ? "" : "")}
        </li>
      </div>
    );
  }
}

export default DropdownItem;
