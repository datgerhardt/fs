import React, { useState } from 'react'

const Button =({onClick, text}) => {

  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = (props) => {
  
  if (props.good === 0 && props.bad === 0 && props.neutral === 0){
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  } 

  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p> 
      <p>positive { props.positivePercentage}%</p>
    </div>
  )
}

const App = () => {
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
  let average = (good*1 -(bad*1))/total
  let positivePercentage = (good)*100/total

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} onClick={handleClickGood}/>
      <Button text={'neutral'} onClick={handleClickNeutral}/>
      <Button text={'bad'} onClick={handleClickBad}/>
      <Statistics good={good} bad={bad} neutral={neutral} average={average} total={total} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App