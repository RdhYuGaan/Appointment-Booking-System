// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import MyAppointments from './pages/MyAppointments';
import Register from './pages/Register';


const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <AuthProvider> {/* AuthProvider must be inside Router */}
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
