// Script để test MockAPI.io
const testAPI = async () => {
  const baseURL = 'https://66f6699f436827ced97704c4.mockapi.io';
  
  console.log('Testing MockAPI.io endpoints...\n');
  
  // Test Customers API
  try {
    console.log('1. Testing Customers API...');
    const customersResponse = await fetch(`${baseURL}/customers`);
    console.log(`   Status: ${customersResponse.status}`);
    
    if (customersResponse.ok) {
      const customersData = await customersResponse.json();
      console.log(`   Data: ${JSON.stringify(customersData, null, 2)}`);
    } else {
      const errorText = await customersResponse.text();
      console.log(`   Error: ${errorText}`);
    }
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
  
  console.log('\n');
  
  // Test Orders API
  try {
    console.log('2. Testing Orders API...');
    const ordersResponse = await fetch(`${baseURL}/orders`);
    console.log(`   Status: ${ordersResponse.status}`);
    
    if (ordersResponse.ok) {
      const ordersData = await ordersResponse.json();
      console.log(`   Data: ${JSON.stringify(ordersData, null, 2)}`);
    } else {
      const errorText = await ordersResponse.text();
      console.log(`   Error: ${errorText}`);
    }
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
  
  console.log('\n');
  
  // Test creating a customer
  try {
    console.log('3. Testing Create Customer...');
    const newCustomer = {
      name: 'Test Customer',
      email: 'test@example.com',
      phone: '0123456789',
      joined: '2024-03-20'
    };
    
    const createResponse = await fetch(`${baseURL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCustomer)
    });
    
    console.log(`   Status: ${createResponse.status}`);
    
    if (createResponse.ok) {
      const createdData = await createResponse.json();
      console.log(`   Created: ${JSON.stringify(createdData, null, 2)}`);
    } else {
      const errorText = await createResponse.text();
      console.log(`   Error: ${errorText}`);
    }
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
};

// Chạy test nếu file được execute trực tiếp
if (typeof window === 'undefined') {
  testAPI();
} 