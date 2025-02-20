import React from 'react'
import quiz_data from '../../assets/Quizdata'

function QuizCard() {
  return (
    <div className='quiz-card-container'>
      {
        quiz_data.map((data,idx)=>{
          return <div key={idx} id='quiz-card'>
            <div className='quiz-title'>
              

            </div>

          </div>


        })
      }

    </div>
  )
}

export default QuizCard