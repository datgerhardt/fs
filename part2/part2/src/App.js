import React from 'react'

const App = (props) => {
  const { notes } = props

  const result = notes.map(note => note.id)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>  
        <li key={note.id}>
          {note.content}
        </li>)}
      </ul>
    </div>
  )
}

export default App