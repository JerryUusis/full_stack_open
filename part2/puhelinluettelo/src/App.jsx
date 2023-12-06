import { useState, useEffect } from 'react'
import Form from './components/Form';
import Persons from './components/Phonebook';
import Filter from './components/Filter';
import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filterPhonebook, setFilterPhonebook] = useState('')

  const handleInput = (setUseState) => {
    return (event) => {
      setUseState(event.target.value)
    }
  }

  // Make sure you have a dev server running with JSON server
  // Open a terminal window and run "npm run server"
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('response fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const checkDuplicateValue = (array, value) => {
    return array.find((item) => item.name === value)
  }

  const addPerson = (event) => {

    if (checkDuplicateValue(persons, newName) !== undefined) {
      event.preventDefault();
      return window.alert(`${newName} is already on added on the phonebook`)
    }
    else {
      event.preventDefault()
      const newPersonObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personService
        .create(newPersonObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setNewName("")
          setNewNumber("")
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleInput={handleInput}
        setFilterPhonebook={setFilterPhonebook}
      />
      <Form
        addPerson={addPerson}
        handleInput={handleInput}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber} />
      <Persons
        persons={persons}
        filterPhonebook={filterPhonebook}
      />
    </div>
  )
}

export default App
