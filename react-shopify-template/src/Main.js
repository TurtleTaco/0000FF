import React, { Component } from 'react';
import { Button, DatePicker, version } from "antd";
import 'antd/dist/antd.css';
import './component_styles/Main.css';
import ProductsHorizontalScroll from './components/ProductsHorizontalScroll'
import './component_shared/Fonts.css'

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
        return (
        <div className = 'Main'>
            <img className = 'Poster' src = {this.posterUrl} />
            <div className = 'HorizontalScrollHeaderContainer'>
                <p className = 'HorizontalScrollHeaderTitle'>Trending now</p>
            </div>
            <ProductsHorizontalScroll
                products={this.testPs}
            />
        </div>
        );
    }

}

export default Main;
