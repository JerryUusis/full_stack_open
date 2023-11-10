import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Votes = ({ votes }) => {
  return (
    <div>
      <p>Has {votes} votes</p>
    </div>
  )
}

const Heading = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  )
}

function App() {

  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomNumber = (number) => {
    return Math.floor(Math.random() * number)
  }

  const generateAnecdote = () => {
    setSelected(randomNumber(anecdotes.length))
  }

  const giveVote = (index) => {
    setPoints((previousState) => {
      const copy = [...previousState];
      copy[index] += 1
      return copy;
    }
    )
  }

  return (

    <div>
      <Heading text="Anecdote of the day" />
      {anecdotes[selected]}
      <Votes votes={points[selected]} />
      <Button text="Next anecdote" handleClick={() => generateAnecdote()} />
      <Button text="vote" handleClick={() => giveVote(selected)} />
      <Heading text="Anecdote with most votes" />
      {anecdotes[points.indexOf(Math.max(...points))]}
      <Votes votes={Math.max(...points)} />
    </div>
  )
}

export default App
