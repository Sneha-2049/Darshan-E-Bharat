import React, {useState,useRef} from  'react'
import quiz_data from '../../assets/Quizdata'
import Swal from "sweetalert2";

function Quiz(props) {
  const [score,setScore]=useState(0);
  let scoreRef=useRef(0);
  let quesNo = 0;
  const questions = quiz_data[props.index].questions
  const handleChange = (index,evt)=>{
      console.log(evt.target.value);
      console.log(index);
      if (evt.target.value === questions[index].answer){
        setScore(prevScore => {
          console.log(prevScore + 1); 
          return prevScore + 1;
        });     
       }
  }
  // const handleClick = ()=>{
  //   scoreRef.current.innerHTML = `Congratulations! Your Total Score is: ${score}`; 
  //  }
  const handleClick = async (event) => {
    event.preventDefault();
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
                      onChange={(event)=>handleChange(index,event)}
                    />
                    <label htmlFor={`ques-${index}-${idx}`}>{opt}</label>
                  </div>
                ))}
              </div>
            </div>

          ))
        }
        <button type='submit' className='quiz-submit' onClick={handleClick} >Submit</button>
        <div ref={scoreRef} className='score-box'></div>

      </div>
    </div>
  )
}

export default Quiz