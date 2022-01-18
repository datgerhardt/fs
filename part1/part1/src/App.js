import React, {useState} from 'react';


const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (val) => () => {
    setValue(val)
  }


  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>Reset</button>
      <button onClick={setToValue(value +1)}>Increment</button>
    </div>
  )
}
  
export default App;