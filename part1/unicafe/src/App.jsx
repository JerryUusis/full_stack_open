import { useState } from 'react'
import Heading from './Title'
import Button from './Button'
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Heading text ="Give feedback"/>
      <div>
        <Button text="Good"/>
        <Button text="Neutral"/>
        <Button text="Bad"/>
      </div>
      <Heading text ="Statistics"/> 
      <Statistics reviewType= "Good" review = {6} />
      <Statistics reviewType= "Neutral" review = {6} />
      <Statistics reviewType= "Bad" review = {6} />
    </>
  )
}

export default App
