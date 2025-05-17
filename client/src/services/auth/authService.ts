// Mock data for development
const MOCK_USERS = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'password123',
    name: 'Test User'
  }
];

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

class AuthService {
  // Mock login function
  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = MOCK_USERS.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Email hoặc mật khẩu không đúng');
    }

    // Remove password from user object
    const { password, ...userWithoutPassword } = user;
    void password;
    return userWithoutPassword;
  }

  // Mock logout function
  async logout(): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }

  // Mock get current user function
  async getCurrentUser(): Promise<User | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would check localStorage/sessionStorage or make an API call
    return null;
  }
}

export const authService = new AuthService(); 