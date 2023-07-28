"use client"

import React, { useState } from 'react';
import FeelingQuestion from './FeelingQuestion';
import FeelingButton from './FeelingButton';
import FeelingData from './FeelingData';

const FeelingSurveyApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = FeelingData


  const handleAnswerClick = (nextQuestionId: number) => {
    setAnswers([...answers, currentQuestionIndex]);
    setCurrentQuestionIndex(nextQuestionId - 1); // Minus 1 since array is 0-based
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Determine if we have answered the current question already
  const isAnswered = answers.includes(currentQuestionIndex);

  return (
    <div className="container">

      <div id="question">
        {!isAnswered && <FeelingQuestion question={currentQuestion.question} />}
      </div>

      <div id="feeling-buttons" className="btn-grid">
        {!isAnswered &&
          currentQuestion.answers.map((answer, index) => (
            <FeelingButton key={index} feeling={answer.label} onClick={() => handleAnswerClick(answer.nextQuestionId)} />
          ))}
      </div>

    </div>
  );
};

export default FeelingSurveyApp;
