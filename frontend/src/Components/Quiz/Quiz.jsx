import React, { useState, useRef, useEffect } from 'react';
import quiz_data from '../../assets/QuizData';
import Swal from "sweetalert2";
import "./Quiz.css";

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const questions = quiz_data[props.index].questions;
  let colorRef = useRef([]);
  let quesNo = 0;

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setRandomQuestions(shuffled);
  }, [props.index]);

  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleClick();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleChange = (index, evt) => {
    if (evt.target.value === randomQuestions[index].answer) {
      setCorrectAnswers(prev => [...prev, evt.target.parentNode]);
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, evt.target.parentNode]);
    }
  };

  const handleClick = (event) => {
    if (event) event.preventDefault();
    setIsSubmitted(true);

    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.disabled = true;
    });

    randomQuestions.forEach((ques, idx) => {
      ques.options.forEach((option, optionIdx) => {
        if (option === ques.answer) {
          const correctOption = colorRef.current[idx][optionIdx];
          if (correctOption) {
            correctOption.parentNode.classList.add("correct");
            const checkmark = document.createTextNode(" ✅");
            correctOption.parentNode.appendChild(checkmark);
          }
        }
      });
    });

    wrongAnswers.forEach((element) => {
      element.classList.add("wrong");
      const wrongMark = document.createTextNode(" ❌");
      element.appendChild(wrongMark);
    });

    Swal.fire({
      title: "Quiz Submitted!",
      text: `Your Total Score: ${score} / ${randomQuestions.length}`,
      icon: "success",
      confirmButtonColor: "#27ae60",
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className='test-container'>
      <div className="test-header">
        <h1>{quiz_data[props.index].topic}</h1>
        <div className="quiz-timer">⏳ Time Left: <span>{formatTime(timeLeft)}</span></div>
      </div>
      <div className='question-container'>
        {randomQuestions.map((ques, index) => (
          <div key={index} className='ques'>
            <h2 className='question'><span>{++quesNo}.</span> {ques.question}</h2>
            <div className='option-container'>
              {ques.options.map((opt, idx) => (
                <div key={idx} className='options'>
                  <input
                    id={`ques-${index}-${idx}`}
                    name={`question-${index}`}
                    type='radio'
                    value={opt}
                    onChange={(event) => handleChange(index, event)}
                  />
                  <label
                    ref={(el) => {
                      if (!colorRef.current[index]) colorRef.current[index] = [];
                      colorRef.current[index][idx] = el;
                    }}
                    htmlFor={`ques-${index}-${idx}`}
                  >
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type='submit' className='quiz-submit' onClick={handleClick} disabled={isSubmitted}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
