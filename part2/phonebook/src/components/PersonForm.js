import React, { useState } from 'react'
import backend from '../services/persons'


const PersonForm = ({persons, setPersons, setMessage}) => {
   
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const newObj = {
          name: newName,
          number: newNumber
        }
    
        let arr = persons.map(person => person.name)        
        let win = window.confirm(`${newObj.name} is already added to phonebook, replace the old number with a new one`)
        
        if(arr.includes(newObj.name) && win){
          let id = arr.indexOf(newObj.name) +1
          backend
          .update(id, newObj)
          .then(
            returnPerson => {
              setPersons(persons.map(p => p.id !== returnPerson.id ? p : returnPerson))
              setMessage(
                {msg:`Updated '${returnPerson.name}'  `, status:true }
              )
              setTimeout(() => {
                setMessage({msg:'', status:true })
              }, 5000)   
            })
            .catch(( )=> {
              setMessage(
                {msg:`Information of '${newObj.name}' has already been removed from the server`, status:false }
              )
              setTimeout(() => {
                setMessage({msg:'', status:true })
              }, 5000)   
            })      
        } else {
          backend
          .create(newObj)
          .then(returnPerson => {
            setPersons(persons.concat(returnPerson))
            setNewName('')
            setNewNumber('')
            setMessage(
              {msg:`Added '${returnPerson.name}'  `, status:true }
            )
            setTimeout(() => {
              setMessage({msg:'', status:true })
            }, 5000)   
          })
          .catch(( )=> {
            setMessage(
              {msg:`This phone '${newObj.name}' was not added to the server`, status:false }
            )
            setTimeout(() => {
              setMessage({msg:'', status:true })
            }, 5000)   
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