import React, { useEffect, useState } from 'react'
import backend from './services/persons'
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    backend
    .getAll()
    .then(initContacts => setPersons(initContacts))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h2> Add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App