import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import MyAppointments from './pages/MyAppointments';
import Register from './pages/Register';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router> {/* Wrap the entire app with Router */}
        <AuthProvider> 
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
