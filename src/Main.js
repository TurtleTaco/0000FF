import React, { Component } from 'react';
import { Button, DatePicker, version } from "antd";
import 'antd/dist/antd.css';
import './Main.css';

class Main extends Component {
    constructor() {
        super();

        // Preserve Main Page specific states here
        this.state = {
            isMainOpen: false  
        };

        // Add handlers here

    } // End constructor

    componentWillMount() {
        // Handle "Will Mount" optionss
        this.props.client.checkout.create().then((res) => {
            this.setState({
                checkout: res,
            });
        });
      
        this.props.client.product.fetchAll().then((res) => {
            this.setState({
                products: res,
            });
        });
    
        this.props.client.shop.fetchInfo().then((res) => {
            this.setState({
                shop: res,
            });
        });
    }

    componentDidMount() {
        // Handle "After Mound" options
        ;
    }

    // Render starts here
    render() {
        return (
            <div className="Main">
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        );
    }

}

export default Main;
