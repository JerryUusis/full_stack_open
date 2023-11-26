import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Bobo Dankovich',
      number: "0700 123 123" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("");

  const handleInput = (setUseState) => {
    return (event) => {
      setUseState(event.target.value)
    }
  }

  const checkDuplicateValue = (array, value) => {
    return array.find((item) => item.name === value)
  }

  const addPerson = (event) => {

    if (checkDuplicateValue(persons, newName) !== undefined) {
      event.preventDefault();
      return window.alert(`${newName} is already on added on the phonebook`)
    } else {
      event.preventDefault()
      const newPersonObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObject))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            onChange={handleInput(setNewName)}
            value={newName} />
        </div>
        <div>number:
          <input
            onChange={handleInput(setNewNumber)}
            value={newNumber} />
        </div>
        <div>
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name} {person.number}</li>
        })}
      </ul>
    </div>
  )
}

export default App
