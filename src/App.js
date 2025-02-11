import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyAppointments from "./pages/MyAppointments";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/appointments">My Appointments</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MyAppointments />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
