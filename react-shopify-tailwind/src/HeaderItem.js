import React, { Component } from 'react';
import './DropdownItem.css'

class HeaderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isHovered : false,
    }

    this.hoverStyle = "float-right ml-6 ".concat(this.props.fontSize + " ");
  }

  handleMouseHover = () => {
    this.setState({
        isHovered : !this.state.isHovered,
    }) 
  }

  render() {
    return (
        <div>
            <span 
                className={this.hoverStyle.concat(this.state.isHovered ? "underline" : "")}
                onMouseLeave = {this.handleMouseHover} 
                onMouseEnter = {this.handleMouseHover}>
                {this.props.title}
            </span>
        </div>
    );
  }

}

HeaderItem.defaultProps = {
    fontSize : "text-xs",
}

export default HeaderItem;
