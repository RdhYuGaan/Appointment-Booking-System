// src/pages/Register.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, error, success } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>

        {/* Show Error Message */}
        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}

        {/* Show Success Message */}
        {success && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link component="button" variant="body2" onClick={() => navigate('/login')} sx={{ cursor: 'pointer' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
