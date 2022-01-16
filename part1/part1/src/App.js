import React, {useState} from 'react';


const App = () => {
  const [counter, setCounter] = useState(0)

    setTimeout(
      () => setCounter(counter +1),
      1000
    )

    return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter +1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        Zero
      </button>
    </div>
  )}
  
export default App;