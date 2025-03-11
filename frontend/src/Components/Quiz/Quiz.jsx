import React, {useState,useRef} from  'react'
import quiz_data from '../../assets/Quizdata'
import Swal from "sweetalert2";

function Quiz(props) {
  const [score,setScore]=useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]); 
  const [wrongAnswers, setWrongAnswers] = useState([]); 
  let colorRef=useRef([]);
  let quesNo = 0;
  const checkmark = document.createTextNode(" ✅");
  const wrongMark = document.createTextNode(" ❌");

  const questions = quiz_data[props.index].questions
  console.log(questions)
  const handleChange = (index,evt)=>{
      console.log(evt.target.value);
      console.log(index);
      if (evt.target.value === questions[index].answer){
        console.log(evt.target.parentNode);
        setCorrectAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
        setScore(prevScore => {
          console.log(prevScore + 1); 
          return prevScore + 1;
        });     
       }
       else{
        console.log(evt.target.parentNode)
        setWrongAnswers(prevAnswers => [...prevAnswers, evt.target.parentNode]);
       }

  }
  const handleClick = async (event) => {
    event.preventDefault();
    // questions.forEach((ques, ix) => {
    //   console.log(colorRef.current.parentNode)

    //   if(ques.answer==colorRef[ix].current.innerText){
    //     colorRef[ix].current.parentNode.style.backgroundColor='#90EE90'
    //   }
    // });
    correctAnswers.forEach((element) => {
      console.log(element)
      element.style.backgroundColor = "#90EE90";
      element.appendChild(checkmark);
        });    
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
                      onChange={(event)=>handleChange(index,event)}
                    />
                    <label ref={colorRef} htmlFor={`ques-${index}-${idx}`}>{opt}</label>
                  </div>
                ))}
              </div>
            </div>

          ))
        }
        <button type='submit' className='quiz-submit' onClick={handleClick} >Submit</button>

      </div>
    </div>
  )
}

export default Quiz