import React, { useState } from 'react';
import './AlgebraSolver.css';

const AlgebraSolver = () => {
  const algebraQuestion = '2 * x + 5 = 15';
  const algebraAnswer = 'x = 5';

  const [showSolution, setShowSolution] = useState(false);

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <div className="algebra-solver">
      <h3>Algebraic Equation Solver</h3>
      <p>Click on the question to reveal the answer:</p>
      <p onClick={toggleSolution}>{algebraQuestion}</p>
      <div className={`solution ${showSolution ? 'show' : ''}`}>
        <p>Solution: {algebraAnswer}</p>
      </div>
      <button className="solution-toggle" onClick={toggleSolution}>
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>
      {showSolution && (
        <p className="solved-message">Algebraic equation solved. Excellent!</p>
      )}
    </div>
  );
};

export default AlgebraSolver;
