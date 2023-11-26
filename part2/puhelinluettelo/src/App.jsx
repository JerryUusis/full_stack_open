import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form';
import Persons from './components/Phonebook';
import Filter from './components/Filter';

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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
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
