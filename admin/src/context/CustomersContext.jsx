import React, { createContext, useState, useEffect } from 'react';
import { fetchCustomers, addCustomer, editCustomer, deleteCustomer as apiDeleteCustomer } from '../apiService/CustomersAPI';

const CustomersContext = createContext();

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCustomers = async () => {
    setLoading(true);
    try {
      const data = await fetchCustomers();
      setCustomers(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch customers');
    } finally {
      setLoading(false);
    }
  };

  const addCustomerHandler = async (customer) => {
    setLoading(true);
    try {
      const newCustomer = await addCustomer(customer);
      setCustomers((prev) => [...prev, newCustomer]);
      setError(null);
    } catch (err) {
      setError('Failed to add customer');
    } finally {
      setLoading(false);
    }
  };

  const updateCustomer = async (id, updated) => {
    setLoading(true);
    try {
      const updatedCustomer = await editCustomer(id, updated);
      setCustomers((prev) => prev.map(c => c.id === id ? updatedCustomer : c));
      setError(null);
    } catch (err) {
      setError('Failed to update customer');
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomer = async (id) => {
    setLoading(true);
    try {
      await apiDeleteCustomer(id);
      setCustomers((prev) => prev.filter(c => c.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete customer');
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