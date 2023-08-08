import React from 'react'
import './App.css';
import Header from './components/Header';
import StudentModule from './components/StudentModule';
import AIEngine from './services/AIEngine';

const aiEngine = new AIEngine(); // Here I am initializing the AIEngine

function App() {
  const recommendedSubjects = aiEngine.getRecommendations('math'); // Get RECOMMENDATIONS

  return (
  
      <div>
        <Header />
        <StudentModule recommendedSubjects={recommendedSubjects} />
      </div>
  );
}

export default App;
