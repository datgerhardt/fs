import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([]) 
  // [
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ]
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => setPersons(res.data))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h2> Add a new </h2>
      <PersonForm persons={persons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App