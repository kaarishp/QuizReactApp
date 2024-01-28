// src/components/QuizApp.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  const questions = [
    {
      questionText: 'Who is the GOAT?',
      options: ['LeBron James', 'Micheal Jordan', 'Stephen Curry', 'Kobe Bryant'],
      correctOption: 'LeBron James',
    },
    {
      questionText: 'How many MVPs does LeBron have?',
      options: ['4', '5', '6', '7'],
      correctOption: '4',
    },
    
  ];

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} onReset={resetQuiz} />
      )}
    </div>
  );
};

export default QuizApp;
