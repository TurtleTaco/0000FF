import React, { Component } from 'react';

class DropdownItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isHovered : false,
    }

    this.hoverStyle = "text-center py-2 text-xs "
  }

  handleDropdownItemMouseHover = () => {
    this.setState({
        isHovered : !this.state.isHovered,
    }) 
  }

  render() {
    return (
        <div>
            <li className={this.hoverStyle.concat(this.state.isHovered ? 
                'text-black bg-gray-100 ' : 'text-white bg-black')} 
                onMouseLeave = {this.handleDropdownItemMouseHover} 
                onMouseEnter = {this.handleDropdownItemMouseHover}>
                {this.props.title}
            </li>             
        </div>
    );
  }
}

export default DropdownItem;
