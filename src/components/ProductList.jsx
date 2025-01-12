// src/components/ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductList = () => {
  const { products, deleteProduct, setCurrentProduct } = useContext(ProductContext);
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '2px solid',
    padding: '8px',
    textAlign: 'left',
  };
  return (
    <div>
      <h2>Product List</h2>
      <table style={tableStyle}> 

{products.map(prod =>(
    <tr key={prod.id} style={tableStyle}>
                        <td >${prod.price}  </td>
                        <td>{prod.name}  </td>
                        <td>{prod.category}  </td>
                        <td><button onClick={
                            ()=>setCurrentProduct(prod)
                        }>EDIT</button></td>
                        <td>
                            <button onClick={()=>deleteProduct(prod.id)}> DELETE</button>
                        </td>
                    </tr>
                ))}
                
</table>

      
    </div>
  );
};

export default ProductList;



            