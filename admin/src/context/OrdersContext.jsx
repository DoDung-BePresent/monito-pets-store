import React, { createContext, useState, useEffect } from 'react';
import { fetchOrders, addOrder, editOrder, deleteOrder as apiDeleteOrder } from '../apiService/OrdersAPI';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (err) {
      console.error('Error in getOrders:', err);
      setError(`Failed to fetch orders: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const addOrderHandler = async (order) => {
    setLoading(true);
    setError(null);
    try {
      const newOrder = await addOrder(order);
      setOrders((prev) => [...prev, newOrder]);
    } catch (err) {
      console.error('Error in addOrderHandler:', err);
      setError(`Failed to add order: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateOrder = async (id, updated) => {
    setLoading(true);
    setError(null);
    try {
      const updatedOrder = await editOrder(id, updated);
      setOrders((prev) => prev.map(o => o.id === id ? updatedOrder : o));
    } catch (err) {
      console.error('Error in updateOrder:', err);
      setError(`Failed to update order: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await apiDeleteOrder(id);
      setOrders((prev) => prev.filter(o => o.id !== id));
    } catch (err) {
      console.error('Error in deleteOrder:', err);
      setError(`Failed to delete order: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, loading, error, getOrders, addOrder: addOrderHandler, updateOrder, deleteOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContext; 