import React, {Component} from 'react';
import 'antd/dist/antd.css';
import ProductCard from './ProductCard';
import '../component_styles/HorizontalScroll.css'

class ProductsHorizontalScroll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let productCardCols = this.props.products.map((card) => {
      return (
        <div className = 'HorizontalScrollCell'>
          <ProductCard 
            client={this.props.client}
            imageUrl={card.imageUrl.toString()}
            imageTitle={card.imageTitle.toString()}
          />
        </div>
      );
    });
    return (
      <div className= 'HorizontalScroll'>
        {productCardCols}
    </div>
    );
  }
}


export default ProductsHorizontalScroll;
