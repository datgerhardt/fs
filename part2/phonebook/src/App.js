import React, { useEffect, useState } from 'react'
import './index.css'
import backend from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons' 
import PersonForm from './components/PersonForm' 
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [message, setMessage] = useState({msg:'', status:false})


  useEffect(() => {
    backend
    .getAll()
    .then(initContacts => setPersons(initContacts))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message.msg} status={message.status} />

      <Filter persons={persons}/>
      <h2> Add a new </h2>
      <PersonForm persons={persons} setPersons={setPersons}  setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App