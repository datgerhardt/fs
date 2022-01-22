import React, { useState } from 'react'

const Display = ({selected, anecdotes, points}) => {

  if (anecdotes.length === selected +1){
    return(
      <p>End of array </p>
    )
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
    </div>   
  )
}


const DisplayMostVote = ({anecdotes, points}) => {
  const max = Math.max(...points);
  const index = points.indexOf(max);

  if(max === 0){
    return(
      <div>
        <p>There is no anecdotes with max vote yet</p>
      </div>
    )
  }

  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
    </div>   
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    if (anecdotes.length <= selected+1){
      setSelected(selected)
    }else{
      setSelected(selected +1)
    }
  }
  const handleVoteClick= () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints([...copy])
  }
  
  return (
    <div>
      <h1> Anecdotes of the day </h1>
      <Display anecdotes={anecdotes} selected={selected} points={points}/>
      
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}> next anecdotes</button>

      <h1> Anecdotes with the most votes </h1>
      <DisplayMostVote anecdotes={anecdotes}  points={points}/>
    </div>
  )
}
 
export default App