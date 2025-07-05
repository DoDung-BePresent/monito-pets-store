const url = "https://66f6699f436827ced97704c4.mockapi.io/orders";

const getHeaders = () => ({
  "Content-Type": "application/json"
});

export const fetchOrders = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch orders: ${response.status} ${errorText}`);
    }
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
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add new order: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding new order:", error);
    throw error;
  }
};

export const editOrder = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to edit order: ${response.status} ${errorText}`);
    }
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
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to delete order: ${response.status} ${errorText}`);
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};