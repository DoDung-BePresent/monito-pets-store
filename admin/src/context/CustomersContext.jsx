import React, { createContext, useState, useEffect } from 'react';
import { fetchCustomers, addCustomer, editCustomer, deleteCustomer as apiDeleteCustomer } from '../apiService/CustomersAPI';

const CustomersContext = createContext();

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCustomers();
      setCustomers(data);
    } catch (err) {
      console.error('Error in getCustomers:', err);
      setError(`Failed to fetch customers: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const addCustomerHandler = async (customer) => {
    setLoading(true);
    setError(null);
    try {
      const newCustomer = await addCustomer(customer);
      setCustomers((prev) => [...prev, newCustomer]);
    } catch (err) {
      console.error('Error in addCustomerHandler:', err);
      setError(`Failed to add customer: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateCustomer = async (id, updated) => {
    setLoading(true);
    setError(null);
    try {
      const updatedCustomer = await editCustomer(id, updated);
      setCustomers((prev) => prev.map(c => c.id === id ? updatedCustomer : c));
    } catch (err) {
      console.error('Error in updateCustomer:', err);
      setError(`Failed to update customer: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomer = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await apiDeleteCustomer(id);
      setCustomers((prev) => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error('Error in deleteCustomer:', err);
      setError(`Failed to delete customer: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <CustomersContext.Provider value={{ customers, loading, error, getCustomers, addCustomer: addCustomerHandler, updateCustomer, deleteCustomer }}>
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersContext; 