import React, { useState } from 'react'

const Button =({onClick, text}) => {

  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good +1)
  }
  const handleClickBad = () => {
    setBad(bad +1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral +1)
  }

  let total = good + bad + neutral

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} onClick={handleClickGood}/>
      <Button text={'neutral'} onClick={handleClickNeutral}/>
      <Button text={'bad'} onClick={handleClickBad}/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good*1 -(bad*1))/total}</p> 
      <p>positive { (good)*100/total}%</p>
    </div>
  )
}

export default App