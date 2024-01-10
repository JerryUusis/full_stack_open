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

  // Returns undefined if a person is not found
  const checkDuplicateValue = (array, value) => {
    return array.find((item) => item.name === value)
  }

  // Adds a person if it doesn't exist. If it exists ask to update person's number
  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = checkDuplicateValue(persons, newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already on added on the phonebook. Do you want to update phone number?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, updatedPerson)
          .then(response => {
            const updatedPersons = persons.map(person => (person.id !== updatedPerson.id ? person : response));
            setPersons(updatedPersons);
          })
      }
    }

    else {
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

  const removePerson = (person) => {
    if (window.confirm(`Do you want to remove ${person.name}`)) {
      setPersons(persons.filter(p => p.name !== person.name))
      personService
        .remove(person)
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
        removePerson={removePerson}
      />
    </div>
  )
}

export default App
