import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/api'; // Your API utility

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Get current page

  // Check if user is logged in, but don't force navigation from register page
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      setUser({ token });
      if (location.pathname === '/login' || location.pathname === '/register') {
        navigate('/appointments'); // Only redirect from login/register
      }
    }
  }, [navigate, location.pathname]); // Depend on `location.pathname`

 
  const login = async (email, password) => {
    setError('');
    setSuccess('');
    try {
      const response = await api.post('/auth/login', { email, password });
  
      // Destructure the token and userId from the response
      const { token, userId } = response.data;
  
      // Save both token and userId in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
  
      setUser({ token, userId, email });
  
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => navigate('/appointments'), 1500); // Redirect after 1.5 seconds
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed: Invalid credentials.');
    }
  };
  
  
  // Register function
  const register = async (name, email, password) => {
    setError('');
    setSuccess('');
    try {
      await api.post('/auth/register', { name, email, password });

      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError('Registration failed: Email may already be in use.');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setSuccess('Logged out successfully.');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error, success }}>
      {children}
    </AuthContext.Provider>
  );
};
