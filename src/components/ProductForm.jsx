// src/components/ProductForm.js
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductForm = () => {
  const { currentProduct, addProduct, editProduct, setCurrentProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
      setCategory(currentProduct.category);
    } else {
      setName('');
      setPrice('');
      setCategory('');
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, category };
    if (currentProduct) {
      editProduct(currentProduct.id, product).then(() => {
        setCurrentProduct(null);
      });
    } else {
      addProduct(product);
    }
    setName('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <button type="submit">{currentProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
