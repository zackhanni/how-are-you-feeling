
"use client"

import React, { useState } from 'react';
import FeelingQuestion from './FeelingQuestion';
import FeelingButton from './FeelingButton';
import FeelingData from './FeelingData';

const FeelingSurveyApp = () => {
  const [questionStack, setQuestionStack] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Feeling array
  const questions = FeelingData

  const handleAnswerClick = (nextQuestionId: number) => {
    setQuestionStack([...questionStack, currentQuestionIndex]);
    setCurrentQuestionIndex(nextQuestionId - 1); // Minus 1 since array is 0-based
  };

  const handleGoBackClick = () => {
    const lastQuestionIndex = questionStack.pop();
    if (lastQuestionIndex !== undefined) {
      setCurrentQuestionIndex(lastQuestionIndex);
    }
  };

  const currentQuestion = questions.find((q) => q.id === currentQuestionIndex + 1);

  // Determine if we have answered the current question already
  const isAnswered = questionStack.includes(currentQuestionIndex);

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

        {questionStack.length > 0 && <FeelingButton feeling="Go Back" onClick={handleGoBackClick} />}
      </div>
    </div>
  );
};

export default FeelingSurveyApp;
