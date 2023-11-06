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

const {good, neutral, bad} = feedback;
const total = good + neutral + bad;

const calculateAverage = () => {
  return ((good * 1) + (neutral * 0) + (bad * -1)) / total; 
}

const positivePercentage = () => {
  return `${(good / total) * 100} %`;
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
      <Statistics reviewType = "Good" review = {good} />
      <Statistics reviewType = "Neutral" review = {neutral} />
      <Statistics reviewType = "Bad" review = {bad} />
      <Statistics reviewType = "Total" review = {total} />
      <Statistics reviewType = "Average" review = {calculateAverage()} />
      <Statistics reviewType = "Positive" review = {positivePercentage()} />
    </>
  )
}

export default App
