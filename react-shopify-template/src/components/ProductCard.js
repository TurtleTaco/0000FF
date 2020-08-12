import React, {Component} from 'react';
import {Card} from 'antd';
import '../component_styles/ProductCard.css'
import 'antd/dist/antd.css';

const { Meta } = Card;

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  //<Meta title={imageTitle} description="www.instagram.com" />
  render() {
    let imageUrl = this.props.imageUrl;
    let imageTitle = this.props.imageTitle;
    let productName = this.props.imageTitle;
    let productDescription = "This is product description";
    let productPrice = 100;
    return (
      <div className = 'ProductContainer'>
        <img className = 'ProductCardCover'  src={imageUrl} />
        <p className = 'ProductCardTitle' > {productName} </p>
        <p className = 'ProductCardPrice' > {productPrice} </p>
        <p className = 'ProductCardDescription' > {productDescription} </p>
      </div>
    );
  }
}

export default ProductCard;
