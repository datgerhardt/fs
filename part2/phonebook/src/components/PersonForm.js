import React, { useState } from 'react'
import backend from '../services/persons'


const PersonForm = ({persons, setPersons}) => {
   
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
          backend
          .create(newObj)
          .then(newContact => {
            setPersons(persons.concat(newContact))
            setNewName('')
            setNewNumber('')
          })          
        }   
      }


  const handNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const handNumberChange = ( event ) => {
    setNewNumber(event.target.value)
  }

    return(
        <form onSubmit={addName}>
            <div>
                name: <input value={newName} onChange={handNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handNumberChange}/></div>
            <div>
            <button type="submit">add</button>
            </div>
      </form> 
    )
}

export default PersonForm