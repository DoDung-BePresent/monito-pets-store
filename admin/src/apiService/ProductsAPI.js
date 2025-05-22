const url = "http://localhost:8080/api/admin/products";

const getHeaders = () => ({
  "Content-Type": "application/json"
});

export const fetchProducts = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (newProduct) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) throw new Error("Failed to add new product");
    return await response.json();
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  }
};

export const editProduct = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to edit product");
    return await response.json();
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete product");
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}; 