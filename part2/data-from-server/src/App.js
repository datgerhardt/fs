import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import AddNote from './components/AddNote'

 const App = () => {
  const [notes, setNotes] = useState([]) 
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    const eventHandler = res => {  
      setNotes(res.data)            
    }
    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)

  }, [])

  const toggleImportanceOf = id => {
    let url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changeNote = {...note, important: !note.important}
    
    axios.put(url, changeNote).then(res => {
      setNotes(notes.map(note => note.id !== id ? note : res.data))
    })
  }


  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)
  
  return (
    <div>
      <h1>Notes</h1>
      <AddNote notes={notes} setNotes={setNotes} />
      <div> 
        <button onClick={()=> setShowAll(!showAll)}>
          show { showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note =>  
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App;