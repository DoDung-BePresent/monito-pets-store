const url = "http://localhost:8080/api/admin/orders";

const getHeaders = () => ({
  "Content-Type": "application/json"
});

export const fetchOrders = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch orders");
    return await response.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const addOrder = async (newOrder) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) throw new Error("Failed to add new order");
    return await response.json();
  } catch (error) {
    console.error("Error adding new order:", error);
    throw error;
  }
};

export const editOrder = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to edit order");
    return await response.json();
  } catch (error) {
    console.error("Error editing order:", error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete order");
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};