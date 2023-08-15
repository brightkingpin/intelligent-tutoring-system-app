// components/TutorModule.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TutorModule = ({ aiEngine }) => {
  const { subject } = useParams();
  const recommendedSubjects = aiEngine.getRecommendations(subject);

  return (
    <div className="module">
      <h2>Tutor Module</h2>
      <p>Welcome to the tutor module of the Intelligent Tutoring System!</p>
      <p>Here are some recommended subjects for you:</p>
      <ul>
        {recommendedSubjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default TutorModule;
