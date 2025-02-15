import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event'; // Calendar icon for branding

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#2E3B55', px: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Left Side - Logo & Brand Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EventIcon sx={{ mr: 1, fontSize: 30 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            AppointmentApp
          </Typography>
        </Box>

        {/* Center - Navigation Links */}
        {user && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/appointments">My Appointments</Button>
          </Box>
        )}

        {/* Right Side - Login/Logout Button */}
        <Box>
          {user ? (
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon sx={{ fontSize: 28 }} />
            </IconButton>
          ) : (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
