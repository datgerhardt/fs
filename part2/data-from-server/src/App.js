
 const App = ({notes}) => {
  return (
    <div >
      <ul>
        {notes.map(note => <li key={note.id}> {note.content} </li>)}
      </ul>
    </div>
  );
}

export default App;
