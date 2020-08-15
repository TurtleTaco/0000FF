import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DropdownItem from './DropdownItem'
import HeaderItem from './HeaderItem'
import './Dropdown.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuOpened: false,
            womanDropdownOpen: false,
        }

        this.dropdownStyle = "absolute w-screen z-10 ";
    }

    handleHeaderMenuClick = () => {
        this.setState({
            menuOpened: !this.state.menuOpened,
        });
    }

    render() {

        return (

            <div>

                {/* Header */}
                <div className="flex items-center mt-1 mb-4">
                    <div className="flex-shrink-0 px-4 ">
                        <img className="rounded-lg w-32 md:w-56" src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IconBrandSymble_e120a1f0-5b6a-4bda-beb7-65238ff89f06.jpg?v=1597510441" />
                    </div>

                    <div className="flex-1 px-4 py-2 block md:hidden">
                        <MenuIcon className="float-right ml-3" onClick={this.handleHeaderMenuClick} />
                        <SearchIcon className="float-right ml-3" />
                    </div>

                    <div className="hidden px-10 py-2 md:block md:flex-1">
                        <HeaderItem title='Search' />
                        <HeaderItem title='Woman' />
                        <HeaderItem title='Man' />
                        <HeaderItem title='New Releases' />
                    </div>

                </div>

                {/* Header Dropdown*/}
                {
                    <div className={this.dropdownStyle.concat(this.state.menuOpened ?
                        "dropdownOpened" : "dropdownClosed")}>
                        <ul>
                            <DropdownItem title='Man' />
                            <DropdownItem title='Woman' />
                            <DropdownItem title='New Releases' />
                            <DropdownItem title='Contact' />
                        </ul>
                    </div>

                }
            </div>
        );
    }
}

export default Header;
