import React, { useState, useRef } from 'react'
import quiz_data from '../../assets/Quizdata'
import Swal from "sweetalert2";

function Quiz(props) {
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  let colorRef = useRef([]);
  let quesNo = 0;
  const wrongMark = document.createTextNode(" ❌");

  const questions = quiz_data[props.index].questions
  const handleChange = (index, evt) => {
    if (evt.target.value === questions[index].answer) {
      setCorrectAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
      setScore(prevScore => {
        console.log(prevScore + 1);
        return prevScore + 1;
      });
    }
    else {
      console.log(evt.target.parentNode)
      setWrongAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
    }

  }
  const handleClick = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.disabled = true;
    });

    // function to display correct answer
    questions.forEach((ques, idx) => {
      ques.options.forEach((option, optionIdx) => {
        if (option === ques.answer) {
          const correctOption = colorRef.current[idx][optionIdx];
          if (correctOption) {
            correctOption.parentNode.style.backgroundColor = "#90EE90";
            const checkmark = document.createTextNode(" ✅");
            correctOption.parentNode.appendChild(checkmark);
          }
        }
      });
    });
    // function to display wrong answer
    wrongAnswers.forEach((element) => {
      console.log(element)
      element.style.backgroundColor = "#FF4C4C";
      element.appendChild(wrongMark);
    });

    Swal.fire({
      title: "Quiz Submitted!",
      text: `Congratulations! Your Total Score is: ${score}`,
      icon: "success"
    });

  }

  return (
    <div className='test-container'>
      <h1>{quiz_data[props.index].topic}</h1>
      <div className='question-container'>
        {
          questions.map((ques, index) => (
            <div key={index} className='ques'>
              <h2 className='question'><span>{++(quesNo)}</span> {ques.question}</h2>
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

          ))
        }
        <button type='submit' className='quiz-submit' onClick={handleClick}  disabled={isSubmitted}>Submit</button>

      </div>
    </div>
  )
}

export default Quiz