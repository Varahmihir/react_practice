// src/pages/ProductPage.js
import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { ProductProvider } from '../contexts/ProductContext';

const ProductPage = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Product Management</h1>
        <ProductForm />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default ProductPage;
