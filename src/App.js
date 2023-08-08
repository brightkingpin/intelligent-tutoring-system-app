import React from 'react';
import './App.css';
import Header from './components/Header';
import StudentModule from './components/StudentModule';
import TutorModule from './components/TutorModule';
import DomainModel from './components/DomainModel';
import AIEngine from './services/AIEngine';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the addition of 'Routes'

const aiEngine = new AIEngine();

function App() {
  const recommendedSubjects = aiEngine.getRecommendations('math');

  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Wrap your Route components with Routes */}
          <Route path="/student" element={<StudentModule recommendedSubjects={recommendedSubjects} />} />
          <Route path="/tutor" element={<TutorModule />} />
          <Route path="/domain" element={<DomainModel />} />
          <Route path="/" element={<div>Your default content</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
