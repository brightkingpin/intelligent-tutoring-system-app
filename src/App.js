import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import StudentModule from './components/StudentModule';
import TutorModule from './components/TutorModule'; // Import TutorModule
import DomainModel from './components/DomainModel'; // Import DomainModel
import AIEngine from './services/AIEngine';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const aiEngine = new AIEngine();

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/student/:subject"
            element={<StudentModule aiEngine={aiEngine} />}
          />
          <Route path="/tutor" element={<TutorModule />} /> {/* Add TutorModule Route */}
          <Route path="/domain" element={<DomainModel />} /> {/* Add DomainModel Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
