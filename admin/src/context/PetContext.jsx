import React, { createContext, useState, useEffect } from "react";
import { fetchPets, addPet, editPet, deletePet } from "../apiService/PetAPI";

export const PetContext = createContext(null);

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPets = async () => {
    setLoading(true);
    try {
      const data = await fetchPets();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPet = async (newPet) => {
    setLoading(true);
    try {
      const addedPet = await addPet(newPet);
      setPets((prevPets) => [...prevPets, addedPet]);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePet = async (id, updatedData) => {
    setLoading(true);
    try {
      const updatedPet = await editPet(id, updatedData);
      setPets((prevPets) =>
        prevPets.map((pet) => (pet.id === id ? updatedPet : pet))
      );
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removePet = async (id) => {
    setLoading(true);
    try {
      await deletePet(id);
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
      setError(null);
    } catch (error) {
      setError(error.message);
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