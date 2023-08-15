import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (subject) {
      navigate(`/student/${subject}`);
    }
  };

  return (
    <div className="home">
      <h2>Welcome to the Intelligent Tutoring System</h2>
      <p>Enter a subject to get started:</p>
      <input
        type="text"
        placeholder="Enter a subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Home;
