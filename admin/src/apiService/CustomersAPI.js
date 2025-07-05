const url = "https://66f6699f436827ced97704c4.mockapi.io/customers";

const getHeaders = () => ({
  "Content-Type": "application/json"
});

export const fetchCustomers = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch customers: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const addCustomer = async (newCustomer) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(newCustomer),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add new customer: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding new customer:", error);
    throw error;
  }
};

export const editCustomer = async (id, updatedData) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to edit customer: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error editing customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to delete customer: ${response.status} ${errorText}`);
    }
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
}; 