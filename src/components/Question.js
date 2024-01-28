// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption === question.correctOption);
  };

  return (
    <div>
      <h2>{question.questionText}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <label key={index} >
            <input className="radio-label"
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
