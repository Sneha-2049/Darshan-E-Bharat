import React, { useState, useRef,useEffect } from 'react';
import quiz_data from '../../assets/QuizData'
import Swal from "sweetalert2";
import "./Quiz.css";

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const questions = quiz_data[props.index].questions;

  useEffect(() => {
    // Shuffle and select 10 random questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setRandomQuestions(shuffled);
  }, [props.questions]);

  let colorRef = useRef([]);
  let quesNo = 0;
  const wrongMark = document.createTextNode(" ❌");

  //  selcted-answer-checking-function
  const handleChange = (index, evt) => {
    if (evt.target.value === randomQuestions[index].answer) {
      setCorrectAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
      setScore(prevScore => prevScore + 1);
    } else {
      setWrongAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
    }
  };
  //  quiz-submit-handling
  const handleClick = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.disabled = true;
    });

  // (R)Count score here
  let calculatedScore = 0;

  randomQuestions.forEach((ques, index) => {
    const selected = document.querySelector(`input[name='question-${index}']:checked`);
    if (selected && selected.value === ques.answer) {
      calculatedScore++;
    }
  });

  // (R)Update score state
  setScore(calculatedScore);

    // Show correct answers
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

    // Show wrong answers
    wrongAnswers.forEach((element) => {
      element.classList.add("wrong");
      element.appendChild(wrongMark);
    });

    // (R)Submit to backend
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


    Swal.fire({
      title: "Quiz Submitted!",
      text: `Your Total Score: ${score} / ${randomQuestions.length}`,
      icon: "success",
      confirmButtonColor: "#27ae60",
    });
    
  };

  return (
    <div className='test-container'>
      <h1>{quiz_data[props.index].topic}</h1>
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
                  <label ref={(el) => {
                    if (!colorRef.current[index]) colorRef.current[index] = [];
                    colorRef.current[index][idx] = el;
                  }} htmlFor={`ques-${index}-${idx}`}>
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
