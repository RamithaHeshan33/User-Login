import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'; // Import Register Component
import Dashboard from './Components/Dashboard/Dashboard'; // Import Dashboard Component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />       {/* Default Route */}
        <Route path="/register" element={<Register />} /> {/* Register Route */}
        <Route path='/dashboard' element={<Dashboard />} /> {/* Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
