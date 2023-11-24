import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Bobo Dankovich' }
  ])
  const [newName, setNewName] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
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
        name: newName
      }
      setPersons(persons.concat(newPersonObject))
      setNewName("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            onChange={handleInput}
            value={newName} />
        </div>
        <div>
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App
