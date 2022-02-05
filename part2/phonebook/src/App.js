import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [newResultfilter, setNewResultfilter] = useState('')



  const handNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const handNumberChange = ( event ) => {
    setNewNumber(event.target.value)
  }

 const  handFilterChange =(event) => {
    setFilter(event.target.value)
    let arr = persons.map(person => person.name.toLowerCase() + " " + person.number)
    let result = arr.filter(s => s.includes(filter.toLowerCase()))
    setNewResultfilter(result)
    // console.log(result)
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
      <div>
        filter show with: <input value={filter} onChange={handFilterChange}/>
        <div> {newResultfilter} </div>
      </div>
      <h2> Add a new </h2>
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
        {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App