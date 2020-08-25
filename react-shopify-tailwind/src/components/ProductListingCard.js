import React, { Component } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from './ProductListingCard.module.css'

class ProductListingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        index : 1,
    }

    this.images = [
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_05.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_04.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_05.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_04.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_05.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_04.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_05.jpg?v=1597605871",
        "https://cdn.shopify.com/s/files/1/0452/6548/5989/files/ysl_04.jpg?v=1597605871",
    ]
    this.size = this.images.length;

  }

  HandleLeftArrowClick = () => {
    this.setState({
        index : this.state.index == 0 ? this.size - 1 : this.state.index - 1,
      });
  }

  HandleRightArrowClick = () => {
    this.setState({
        index : ((this.state.index + 1) % this.size),
      });
  }

  HandleDotClick = (updatedIndex) => {
      console.log(updatedIndex)
    this.setState({
        index : updatedIndex,
      });
  }

  render() {

    var dotIndicator = [];
    var dotStyle = styles.dot.concat(" ml-1 "); 
    for (var i = 0; i < this.size; i++) {
        dotIndicator.push(<span className={dotStyle.concat((i == this.state.index) ? "bg-white" : "bg-black")}></span>);
      }

      

    return (
        <div className="relative">
            <ChevronLeftIcon className={styles.arrowgroup.concat(" absolute z-10")} onClick = {this.HandleLeftArrowClick} 
            style = {{fontSize : `40px`}}/>
            <ChevronRightIcon className={styles.arrowgroup.concat(" absolute z-10 right-0")} onClick = {this.HandleRightArrowClick} 
            style = {{fontSize : `40px`}}/>
            

            <div className="relative">
                <img className={styles.fade} key={this.images[this.state.index]} src={this.images[this.state.index]}/>
                <div className="absolute flex justify-center bottom-0 w-full z-10 pb-2">
                    {dotIndicator}
                </div>
            </div>
            
            <div className="text-sm pt-1">Product Title</div>
            <div className="text-xs text-gray-600">Product Price</div>
            
        </div>
    );
  }

}

export default ProductListingCard;
