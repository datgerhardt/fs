import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import AddNote from './components/AddNote'
import noteService from './services/notes'

 const App = () => {
  const [notes, setNotes] = useState([]) 
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
    .getAll()
    .then(iniatialNotes => {  
      setNotes(iniatialNotes)            
    })

  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changeNote = {...note, important: !note.important}
    
    noteService
    .update(id, changeNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
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