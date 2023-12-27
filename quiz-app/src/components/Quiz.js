import React, { useState, useContext } from 'react';
import { Question } from './Helpers/QuestionBank';
import { QuizContext } from './Helpers/Contexts';
import '../App.css';
import EndScreen from './EndScreen';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(null);

  const nextQuestion = () => {
    if (Question[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen(null); // Reset selected option for the next question
  };

  const finishQuiz = () => {
    if (Question[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  };

  return (
    <div className='Quiz'>
      <h1>{Question[currentQuestion].prompt}</h1>
      <div className='options'>
        <button
          onClick={() => setOptionChosen("A")}
          className={optionChosen === "A" ? 'selected' : ''}
        >
          {Question[currentQuestion].optionA}
        </button>
        <button
          onClick={() => setOptionChosen("B")}
          className={optionChosen === "B" ? 'selected' : ''}
        >
          {Question[currentQuestion].optionB}
        </button>
        <button
          onClick={() => setOptionChosen("C")}
          className={optionChosen === "C" ? 'selected' : ''}
        >
          {Question[currentQuestion].optionC}
        </button>
        <button
          onClick={() => setOptionChosen("D")}
          className={optionChosen === "D" ? 'selected' : ''}
        >
          {Question[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Question.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
