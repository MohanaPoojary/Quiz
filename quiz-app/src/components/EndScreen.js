import React, { useContext } from 'react';
import { QuizContext } from './Helpers/Contexts';
import '../App.css';
import { Question } from './Helpers/QuestionBank';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Ended</h1>
      <p> {score}/{Question.length}</p>
      <button onClick={restartQuiz}> Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
