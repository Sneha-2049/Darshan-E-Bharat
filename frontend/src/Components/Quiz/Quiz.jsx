import React, { useState, useRef } from 'react';
import quiz_data from '../../assets/Quizdata';
import Swal from "sweetalert2";
import "./Quiz.css";

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  let colorRef = useRef([]);
  let quesNo = 0;
  const wrongMark = document.createTextNode(" ❌");

  const questions = quiz_data[props.index].questions;

  //  selcted-answer-checking-function
  const handleChange = (index, evt) => {
    if (evt.target.value === questions[index].answer) {
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

    // Show correct answers
    questions.forEach((ques, idx) => {
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

    Swal.fire({
      title: "Quiz Submitted!",
      text: `Your Total Score: ${score} / ${questions.length}`,
      icon: "success",
      confirmButtonColor: "#27ae60",
    });
  };

  return (
    <div className='test-container'>
      <h1>{quiz_data[props.index].topic}</h1>
      <div className='question-container'>
        {questions.map((ques, index) => (
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
