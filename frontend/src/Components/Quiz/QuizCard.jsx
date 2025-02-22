import React from 'react'
import { Link } from 'react-router-dom';
import quiz_data from '../../assets/Quizdata'
import Quiz from './Quiz'

function QuizCard({sendIndex}) {
  return (
    <div className="quiz-card-container">
      {quiz_data.map((quiz, index) => (
        <div id="quiz-card" key={index}>
          <img src={quiz.image} alt={quiz.topic} className="quiz-card-image" />
          <div className="quiz-content">
            <h3>{quiz.topic}</h3>
            <p>{quiz.description}</p>
            <p><strong>Questions:</strong> {quiz.questionsCount}</p>
            <p><strong>Time Limit:</strong> {quiz.timeLimit}</p>
            <button className="start-quiz" onClick={() => sendIndex(index)}><Link to='/quiz'>Start Quiz</Link></button>
          </div>
        </div>
      ))}
    </div>  )
}

export default QuizCard