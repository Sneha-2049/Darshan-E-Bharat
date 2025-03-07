import React from 'react'
import './Quiz.css'
import Quizimg from '../../assets/quiz.png'
import { Link } from 'react-router-dom';

function QuizBox() {
  return (
    <div id='/quiz' className='Quiz-container'>
        <h1 className='quiz-head'>Quizz....</h1>
        <div className='quiz-card'>
        <div className='Quiz-description'>
          <h1>🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆</h1>
          <p>Dive into a world of exciting challenges that celebrate India’s rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀</p>
          <Link to='/quizcard'><button className='quiz-button'>Let's Start </button></Link>
        </div>
        <div className='Quiz-image' style={{ backgroundImage: `url(${Quizimg})` }}></div>
        </div>
    </div>
  )
}

export default QuizBox