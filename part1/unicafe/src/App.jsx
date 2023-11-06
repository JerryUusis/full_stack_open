import { useState } from 'react'
import Heading from './Title'
import Button from './Button'
import Statistics from './Statistics';

function App() {

const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0
})

const handleFeedbackClick = (type) => {
  setFeedback({ ...feedback, [type]: feedback[type] + 1})
}

  return (
    <>
      <Heading text ="Give feedback"/>
      <div>
        <Button text="Good" onClick={() => handleFeedbackClick('good')}/>
        <Button text="Neutral" onClick={() => handleFeedbackClick('neutral')}/>
        <Button text="Bad" onClick={() => handleFeedbackClick('bad')}/>
      </div>
      <Heading text ="Statistics"/> 
      <Statistics reviewType= "Good" review = {feedback.good} />
      <Statistics reviewType= "Neutral" review = {feedback.neutral} />
      <Statistics reviewType= "Bad" review = {feedback.bad} />
    </>
  )
}

export default App
