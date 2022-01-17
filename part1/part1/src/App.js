import React, {useState} from 'react';

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left++})
  }

  const handleRightClick = () => {
    const newClick = {
      ...clicks,
      right: clicks.right +1
    }
    setClicks(newClick)
  }
  

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}
  
export default App;