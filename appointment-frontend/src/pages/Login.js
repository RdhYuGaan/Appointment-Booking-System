import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { login, error, success } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg-container">
      <Container maxWidth="xs">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>}

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
              Login
            </Button>
          </form>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link component="button" variant="body2" onClick={() => navigate('/register')} sx={{ cursor: 'pointer' }}>
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
