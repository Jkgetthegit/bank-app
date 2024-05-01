import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import './HomePage.css'
import './App.css'
import UserLoginPage from './UserLogin';
import UserPage from './UserPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/userPage" element={<UserPage />} />
        {/* Define other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
