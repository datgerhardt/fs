import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const newObj = {
      name: newName
    }
    let arr = persons.map(person => person.name)
    
    if(arr.indexOf(newObj.name) + 1 !== 0){
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newObj))
    }   
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App