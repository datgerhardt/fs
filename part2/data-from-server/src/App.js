import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

 const App = () => {
  const [notes, setNotes] = useState([]) 
  // const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(
      res => {  
        console.log('promise fulfilled');
        setNotes(res.data)            
      })
  }
  
  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)
  
  return (
    <div>
      <h1>Notes</h1>
      <div> 
        <button onClick={()=> setShowAll(!showAll)}>
          show { showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note =>  
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App;
