import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Bobo Dankovich'}
  ])
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App
