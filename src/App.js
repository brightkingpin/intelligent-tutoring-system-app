import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import StudentModule from './components/StudentModule';
import TutorModule from './components/TutorModule';
import DomainModel from './components/DomainModel';
import AIEngine from './services/AIEngine';
import Login from './components/Login'; // Importation of the Login component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const aiEngine = new AIEngine();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // It  manages the authentication

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Header />
        {/* It is Conditionally rendered based on isLoggedIn state */}
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:subject" element={<StudentModule aiEngine={aiEngine} />} />
            <Route path="/tutor/:subject" element={<TutorModule aiEngine={aiEngine} />} />
            <Route path="/domain" element={<DomainModel />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} /> // The Login component is rendered here
        )}
      </div>
    </Router>
  );
}

export default App;
