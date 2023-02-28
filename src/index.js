import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/products-context';
import configureStore from './hooks-store/product-store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

configureStore();

root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
