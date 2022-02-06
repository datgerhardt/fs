import React, { useState } from 'react'
import noteService from '../services/notes'

const AddNote = ({notes, setNotes}) => {
   
    const [newNote, setNewNote] = useState('')

    const addNote = event => {
        event.preventDefault()
        const newObj = {
            content: newNote,
            date: new Date(),
            important: Math.random() < 0.5
        }
    
        noteService
        .create(newObj)
        .then(
            returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            }
        )          
    }


  const handNoteChange = ( event ) => {
    setNewNote(event.target.value)
  }

    return(
        <div>
             <form onSubmit={addNote}>
                <div>
                    name: <input value={newNote} onChange={handNoteChange}/>
                </div>            
                <button type="submit">add</button>
            </form> 
        </div>       
    )
}

export default AddNote