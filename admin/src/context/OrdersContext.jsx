import React, { createContext, useState, useEffect } from 'react';
import { fetchOrders, addOrder, editOrder, deleteOrder as apiDeleteOrder } from '../apiService/OrdersAPI';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getOrders = async () => {
    setLoading(true);
    try {
      const data = await fetchOrders();
      setOrders(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const addOrderHandler = async (order) => {
    setLoading(true);
    try {
      const newOrder = await addOrder(order);
      setOrders((prev) => [...prev, newOrder]);
      setError(null);
    } catch (err) {
      setError('Failed to add order');
    } finally {
      setLoading(false);
    }
  };

  const updateOrder = async (id, updated) => {
    setLoading(true);
    try {
      const updatedOrder = await editOrder(id, updated);
      setOrders((prev) => prev.map(o => o.id === id ? updatedOrder : o));
      setError(null);
    } catch (err) {
      setError('Failed to update order');
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (id) => {
    setLoading(true);
    try {
      await apiDeleteOrder(id);
      setOrders((prev) => prev.filter(o => o.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete order');
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