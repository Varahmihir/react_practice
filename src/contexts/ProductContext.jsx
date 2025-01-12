// src/context/ProductContext.js
import React, { createContext, useReducer, useEffect } from 'react';

export const ProductContext = createContext();

const initialState = {
  products: [],
  currentProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map(prd =>
          prd.id === action.payload.id ? action.payload : prd
        ),
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(prd => prd.id !== action.payload),
      };
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.payload };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PRODUCTS', payload: data }));
  }, []);

  const addProduct = (product) => {
    return fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: 'ADD_PRODUCT', payload: data }));
  };

  const editProduct = (id, updatedProduct) => {
    return fetch(`http://localhost:3000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: 'EDIT_PRODUCT', payload: data }));
  };

  const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
    .then(() => dispatch({ type: 'REMOVE_PRODUCT', payload: id }));
  };

  return (
    <ProductContext.Provider value={{
      products: state.products,
      currentProduct: state.currentProduct,
      setCurrentProduct: (product) => dispatch({ type: 'SET_CURRENT_PRODUCT', payload: product }),
      addProduct,
      editProduct,
      deleteProduct,
    }}>
      {children}
    </ProductContext.Provider>
  );
};
