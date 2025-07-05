import React, { createContext, useState, useEffect } from "react";
import { fetchPets, addPet, editPet, deletePet } from "../apiService/PetAPI";

export const PetContext = createContext(null);

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPets = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPets();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError(`Failed to fetch pets: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const createPet = async (newPet) => {
    setLoading(true);
    setError(null);
    try {
      const addedPet = await addPet(newPet);
      setPets((prevPets) => [...prevPets, addedPet]);
    } catch (error) {
      console.error("Error creating pet:", error);
      setError(`Failed to create pet: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updatePet = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const updatedPet = await editPet(id, updatedData);
      setPets((prevPets) =>
        prevPets.map((pet) => (pet.id === id ? updatedPet : pet))
      );
    } catch (error) {
      console.error("Error updating pet:", error);
      setError(`Failed to update pet: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const removePet = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deletePet(id);
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
      setError(`Failed to delete pet: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <PetContext.Provider
      value={{
        pets,
        loading,
        error,
        getPets,
        createPet,
        updatePet,
        removePet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}; 