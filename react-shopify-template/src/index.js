import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Main from './Main';
import Client from 'shopify-buy';
import './app.css';
import './component_shared/Fonts.css';

import Deck from './components/Deck';
import "./component_styles/Deck.css";

const client = Client.buildClient({
  storefrontAccessToken: '7301dedacfd3710acf80b7325d95a259',
  domain: 'richmofo.myshopify.com'
});

ReactDOM.render(
  <Deck  
  />,
  document.getElementById('root')
);
