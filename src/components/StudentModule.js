import React from 'react';
import { useParams } from 'react-router-dom';

const StudentModule = ({ aiEngine }) => {
  const { subject } = useParams();
  const recommendedSubjects = aiEngine.getRecommendations(subject);

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
    </div>
  );
};

export default StudentModule;
