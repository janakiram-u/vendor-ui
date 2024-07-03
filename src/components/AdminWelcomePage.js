import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './AdminWelcomePage.css'; // Import the CSS file

const AdminWelcomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registervendors'); 
  };

  return (
    <Container className="admin-welcome-container">
      <Box className="Admin-content-box">
        <Typography variant="h3" className="Admin-welcome-text">
          Welcome Admin!
        </Typography>
        <Typography variant="h6" className="Admin-sub-text">
          Register vendors to expand your business reach.
        </Typography>
        <Button
          variant="contained"
          onClick={handleRegisterClick}
          className="register-button"
        >
          Add Vendor
        </Button>
      </Box>
    </Container>
  );
};

export default AdminWelcomePage;
