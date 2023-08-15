import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AlgebraSolver from './AlgebraSolver';

const StudentModule = ({ aiEngine }) => {
  const { subject } = useParams();
  const recommendedSubjects = aiEngine.getRecommendations(subject);
  const navigate = useNavigate();

  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="module">
      <h2>Student Module</h2>
      <p>Welcome to the student module of the Intelligent Tutoring System!</p>
      <p>Here are some recommended subjects for you:</p>
      <ul>
        {recommendedSubjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <AlgebraSolver />

      <h3>Chemistry Question</h3>
      <p>What is the chemical symbol for water?</p>
      <button onClick={toggleAnswer}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      {showAnswer && <p>Answer: H<sub>2</sub>O</p>}

      <h3>History Question</h3>
      <p>Who was the first President of Kenya?</p>
      <button onClick={toggleAnswer}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      {showAnswer && <p>Answer: Jomo Kenyatta</p>}
      
      {/* The Button is used to navigate back to home */}
      <button onClick={navigateToHome}>Go Back to Home</button>
    </div>
  );
};

export default StudentModule;
