// src/components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onReset }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button onClick={onReset}>Retry Quiz</button>
    </div>
  );
};

export default Result;
