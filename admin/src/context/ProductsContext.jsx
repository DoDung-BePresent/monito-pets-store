import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts, addProduct as apiAddProduct, editProduct as apiUpdateProduct, deleteProduct as apiDeleteProduct } from '../apiService/ProductsAPI';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    setLoading(true);
    try {
      const newProduct = await apiAddProduct(product);
      setProducts((prev) => [...prev, newProduct]);
      setError(null);
    } catch (err) {
      setError('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, updated) => {
    setLoading(true);
    try {
      const updatedProduct = await apiUpdateProduct(id, updated);
      setProducts((prev) => prev.map(p => p.id === id ? updatedProduct : p));
      setError(null);
    } catch (err) {
      setError('Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await apiDeleteProduct(id);
      setProducts((prev) => prev.filter(p => p.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error, getProducts, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext; 