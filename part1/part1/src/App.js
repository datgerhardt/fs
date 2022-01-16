import React, {useState} from 'react';


const App = () => {
  const [counter, setCounter] = useState(0)

    setTimeout(
      () => setCounter(counter +1),
      1000
    )

    const  increaseByOne = () => setCounter(counter +1)
    const  setToZero = () => setCounter(0)

    return (
    <div>
      {counter}
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        Zero
      </button>
    </div>
  )}
  
export default App;