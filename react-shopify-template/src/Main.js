import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './component_styles/Main.css';
import './component_shared/Fonts.css'
import ProductsHorizontalScroll from './components/ProductsHorizontalScroll';
import NavigationBar from './components/StickyNavigationBar'
import Deck from './components/Deck'
import { render } from 'react-dom'


class Main extends Component {
    constructor() {
        super();

        // Preserve Main Page specific states here
        this.state = {
            isMainOpen: false  
        };

        this.testPs = [{imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"},
        {imageUrl : "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/sportswear-french-terry-shorts-svkWCD.jpg",imageTitle : "Sample image"}]
        this.posterUrl = 'https://www.ebikemotion.com/e-beauty/wp-content/uploads/2014/05/header3.jpg';

        // Add handlers here

    } // End constructor

    componentDidMount() {
        // Handle "After Mound" options
        ;
    }

    // Render starts here
    render() {
        var loc = window.location.pathname;
        return (
        <div className = 'Main'>
            {/* <div className = 'StickyNavigationBar'>
                <img src = "/Users/Ray/Documents/website/store/0000FF/src/icons/IconBrandSymble.jpg"/> 
                <NavigationBar />
            </div> */}
            {/* <div className= 'Deck'>
                <Deck />
            </div> */}
            {/* <img className = 'Poster' src = {this.posterUrl} />
            <div className = 'HorizontalScrollHeaderContainer'>
                <p className = 'HorizontalScrollHeaderTitle'>Trending now {__dirname}</p>
            </div>
            <ProductsHorizontalScroll
                products={this.testPs}
            /> */}
        </div>
        );
    }

}

export default Main;
