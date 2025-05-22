const url = "http://localhost:8080/api/admin/pets";

const getHeaders = () => {
  return {
    "Content-Type": "application/json"
  };
};

export const fetchPets = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch pets");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error;
  }
};

export const addPet = async (newPet) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(newPet),
    });
    if (!response.ok) {
      throw new Error("Failed to add new pet");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding new pet:", error);
    throw error;
  }
};

export const editPet = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error("Failed to edit pet");
    }
    return await response.json();
  } catch (error) {
    console.error("Error editing pet:", error);
    throw error;
  }
};

export const deletePet = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) {
      throw new Error("Failed to delete pet");
    }
  } catch (error) {
    console.error("Error deleting pet:", error);
    throw error;
  }
}; 