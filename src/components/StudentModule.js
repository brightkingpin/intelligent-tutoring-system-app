import React from 'react';

const StudentModule = ({ recommendedSubjects }) => {
  return (
    <div>
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
