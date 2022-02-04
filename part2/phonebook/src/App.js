import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const handNumberChange = ( event ) => {
    setNewNumber(event.target.value)
  }


  const addName = (event) => {
    event.preventDefault()
    const newObj = {
      name: newName,
      number: newNumber
    }

    let arr = persons.map(person => person.name)
    
    if(arr.includes(newObj.name)){
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
        <div>number: <input value={newNumber} onChange={handNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App