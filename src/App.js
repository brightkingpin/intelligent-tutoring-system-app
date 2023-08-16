import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import StudentModule from './components/StudentModule';
import TutorModule from './components/TutorModule';
import DomainModel from './components/DomainModel';
import AIEngine from './services/AIEngine';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const aiEngine = new AIEngine();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div>
        {/* CreateD a logout button outside of Header */}
        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
        <Header />
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:subject" element={<StudentModule aiEngine={aiEngine} />} />
            <Route path="/tutor/:subject" element={<TutorModule aiEngine={aiEngine} />} />
            <Route path="/domain" element={<DomainModel />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
