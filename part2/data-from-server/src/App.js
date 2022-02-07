import React, { useState, useEffect } from 'react'
import './index.css'
import Note from './components/Note'
import AddNote from './components/AddNote'
import noteService from './services/notes'
import Notification from './components/Notification'


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}


 const App = () => {
  const [notes, setNotes] = useState([]) 
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')


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
    .catch(() => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }


  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)
  
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

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
      <Footer />
    </div>
  )
}

export default App;