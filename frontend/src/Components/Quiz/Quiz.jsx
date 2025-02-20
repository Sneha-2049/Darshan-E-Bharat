import React from 'react'
import quiz_data from '../../assets/Quizdata'

function Quiz() {
  return (
    <div className='test-container'>
        <h1>{quiz_data[0].topic}</h1>
    </div>
  )
}

export default Quiz