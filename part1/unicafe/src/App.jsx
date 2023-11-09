import { useState } from 'react'
import Heading from './Title'
import Button from './Button'


const StatisticsLine = ({reviewType, review}) => {
  return (
      <>
          <p>{reviewType} {review}</p>
      </>
  )
}

const Statistics = ({good, neutral, bad, total, calculateAverage, positivePercentage}) => {
  if(total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <StatisticsLine reviewType = "Good" review = {good} />
      <StatisticsLine reviewType = "Neutral" review = {neutral} />
      <StatisticsLine reviewType = "Bad" review = {bad} />
      <StatisticsLine reviewType = "Total" review = {total} />
      <StatisticsLine reviewType = "Average" review = {calculateAverage()} />
      <StatisticsLine reviewType = "Positive" review = {positivePercentage()} />
    </div>
  )

}

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
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      calculateAverage={calculateAverage}
      positivePercentage={positivePercentage} />
      </>
  )
}

export default App
