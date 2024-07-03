import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import VendorForm from './components/VendorForm';
import VendorLogin from './components/VendorLogin';
import VendorList from './components/VendorList';
import Collapse from './components/Collapse';
import AdminWelcomePage from './components/AdminWelcomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Collapse />

      <Routes>
        <Route
          path="/registervendors"
          element={
           
              <VendorForm />
            
          }
        />
        <Route
          path="/loginvendors"
          element={
          

              <VendorLogin />
           
          }
        />
        <Route
          path="/vendorslist"
          element={
            

              <VendorList />
            
          }
        />
        <Route
          path="/"
          element={
            
              <AdminWelcomePage />
          
          }
        />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
