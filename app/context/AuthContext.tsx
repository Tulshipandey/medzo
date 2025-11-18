'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (userData: RegisterData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  isAuthenticated: boolean;
  resetPassword: (email: string) => Promise<{ success: boolean; message: string }>;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('medswift_user');
    const storedToken = localStorage.getItem('medswift_token');
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('medswift_user');
        localStorage.removeItem('medswift_token');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('medswift_users') || '[]');
      
      // Find user by email
      const foundUser = users.find((u: any) => u.email === email);
      
      if (!foundUser) {
        return { success: false, message: 'User not found. Please register first.' };
      }

      // In a real app, passwords would be hashed. For demo, we compare directly
      if (foundUser.password !== password) {
        return { success: false, message: 'Invalid email or password.' };
      }

      // Create user object without password
      const userData: User = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone,
      };

      // Store user and token
      localStorage.setItem('medswift_user', JSON.stringify(userData));
      localStorage.setItem('medswift_token', 'demo_token_' + Date.now());
      setUser(userData);

      return { success: true, message: 'Login successful!' };
    } catch (error) {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem('medswift_users') || '[]');
      
      // Check if user already exists
      if (users.some((u: any) => u.email === userData.email)) {
        return { success: false, message: 'Email already registered. Please login instead.' };
      }

      // Create new user
      const newUser = {
        id: 'user_' + Date.now(),
        ...userData,
        createdAt: new Date().toISOString(),
      };

      // Add to users array
      users.push(newUser);
      localStorage.setItem('medswift_users', JSON.stringify(users));

      // Auto-login after registration
      const userDataForContext: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      };

      localStorage.setItem('medswift_user', JSON.stringify(userDataForContext));
      localStorage.setItem('medswift_token', 'demo_token_' + Date.now());
      setUser(userDataForContext);

      return { success: true, message: 'Registration successful! Redirecting...' };
    } catch (error) {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('medswift_user');
    localStorage.removeItem('medswift_token');
    setUser(null);
    router.push('/');
  };

  const resetPassword = async (email: string) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('medswift_users') || '[]');
      
      // Check if user exists
      const foundUser = users.find((u: any) => u.email === email);
      
      if (!foundUser) {
        return { success: false, message: 'Email not found. Please check your email address.' };
      }

      // In a real app, you would send an email with reset link
      // For demo, we'll just return success
      return { 
        success: true, 
        message: 'Password reset link has been sent to your email! (Demo: Check console for details)' 
      };
    } catch (error) {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

