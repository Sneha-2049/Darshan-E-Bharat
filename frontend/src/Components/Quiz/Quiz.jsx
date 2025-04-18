import React, { useState, useRef, useEffect } from 'react';
import quiz_data from '../../assets/QuizData';
import Swal from "sweetalert2";
import "./Quiz.css";

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const questions = quiz_data[props.index].questions;
  let colorRef = useRef([]);
  let quesNo = 0;

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setRandomQuestions(shuffled);
  }, [props.index]);

  useEffect(() => {
    if (isSubmitted || randomQuestions.length === 0) return;
  
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
  }, [isSubmitted, randomQuestions.length]);

  const handleClick = async (event) => {
    if (event) event.preventDefault();
    setIsSubmitted(true);
  
    // Disable all radio inputs
    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.disabled = true;
    });
  
    // Calculate score
    let calculatedScore = 0;
    const newlyWrongAnswers = [];
  
    randomQuestions.forEach((ques, index) => {
      const selected = document.querySelector(`input[name='question-${index}']:checked`);
  
      if (selected && selected.value === ques.answer) {
        calculatedScore++;
      } else if (selected) {
        newlyWrongAnswers.push(selected.parentNode);
      }
    });
  
    setScore(calculatedScore);
    setWrongAnswers(newlyWrongAnswers); // update state with current wrong answers
  
    // Highlight correct answers
    randomQuestions.forEach((ques, idx) => {
      ques.options.forEach((option, optionIdx) => {
        if (option === ques.answer) {
          const correctOption = colorRef.current[idx][optionIdx];
          if (correctOption && !correctOption.parentNode.classList.contains("correct")) {
            correctOption.parentNode.classList.add("correct");
  
            // Avoid adding multiple ✅ marks
            if (!correctOption.parentNode.textContent.includes("✅")) {
              const checkmark = document.createTextNode(" ✅");
              correctOption.parentNode.appendChild(checkmark);
            }
          }
        }
      });
    });
  
    // Highlight wrong answers
    newlyWrongAnswers.forEach((element) => {
      if (!element.classList.contains("wrong")) {
        element.classList.add("wrong");
  
        // Avoid adding multiple ❌ marks
        if (!element.textContent.includes("❌")) {
          const wrongMark = document.createTextNode(" ❌");
          element.appendChild(wrongMark);
        }
      }
    });
  
    // Submit to backend
    try {
      const token = localStorage.getItem("token");
      const topic = quiz_data[props.index].topic;
  
      const response = await fetch("http://localhost:8080/api/quiz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        },
        body: JSON.stringify({ topic, score: calculatedScore })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Score submitted. Coins:", data.coins);
      } else {
        console.error("Score submission failed:", data.message);
      }
    } catch (err) {
      console.error("Error submitting score:", err);
    }
  
    // Show result popup
    Swal.fire({
      title: "Quiz Submitted!",
      text: `Your Total Score: ${calculatedScore} / ${randomQuestions.length}`,
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
