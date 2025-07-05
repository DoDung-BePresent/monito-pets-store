const url = "https://66f6699f436827ced97704c4.mockapi.io/products";

const getHeaders = () => ({
  "Content-Type": "application/json"
});

export const fetchProducts = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch products: ${response.status} ${errorText}`);
    }
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
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add new product: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  }
};

export const editProduct = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to edit product: ${response.status} ${errorText}`);
    }
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
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to delete product: ${response.status} ${errorText}`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}; 