import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="min-w-full bg-grey-500 ">

        <div className="flex items-center m-5 ">
            <div className="flex-shrink-0 px-4 py-2 ">
                <img className="rounded-lg w-32 md:w-56" src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/IconBrandSymble.jpg?v=1597284515"/>
            </div>

            <div className="flex-1 px-4 py-2 block md:hidden">
                <MenuIcon className="float-right ml-3" />    
                <SearchIcon className="float-right ml-3" />    
            </div>

            <div className="hidden px-4 py-2 md:block md:flex-1">
                <span className="float-right ml-3">Search</span>
                <span className="float-right ml-3">Menu</span>
            </div>
        </div> 
        
        <div className= "m-5" >
            <img className="rounded-lg w-full" src="https://cdn.shopify.com/s/files/1/0452/6548/5989/files/header.jpg?v=1597286251"/>            
        </div>
        

      </div>
    );
  }
}

export default App;
