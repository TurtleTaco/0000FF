import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css';

const client = Client.buildClient({
  storefrontAccessToken: '7301dedacfd3710acf80b7325d95a259',
  domain: 'richmofo.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
