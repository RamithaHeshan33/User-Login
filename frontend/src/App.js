import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'; // Import Register Component
import TeacherLogin from './Components/Login/TeacherLogin';
import TeacherRegister from './Components/Register/TeachersRegister';
import Dashboard from './Components/Dashboard/Dashboard'; // Import Dashboard Component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />       {/* Default Route */}
        <Route path="/register" element={<Register />} /> {/* Register Route */}
        <Route path='/dashboard' element={<Dashboard />} /> {/* Dashboard Route */}
        <Route path='/teacherlogin' element={<TeacherLogin />} />
        <Route path='/teacherregister' element={<TeacherRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
