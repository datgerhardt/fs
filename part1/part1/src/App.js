import React, {useState} from 'react';

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  )
}
const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

    setTimeout(
      () => setCounter(counter +1),
      1000
    )

    const  increaseByOne = () => setCounter(counter +1)
    const  decreaseByOne = () => setCounter(counter +1)
    const  setToZero = () => setCounter(0)

    return (
    <div>
      <Display counter={counter}/>
      <Button text={'Plus'} onClick={increaseByOne} />
      <Button text={'Minus'} onClick={decreaseByOne} />
      <Button text={'Zero'} onClick={setToZero} />
    </div>
  )}
  
export default App;