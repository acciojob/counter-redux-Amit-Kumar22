
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const change = () => {
    setCount(count+1)
  }
  return (
    <div>
    <p>{count}</p>
        <button onClick={change}>click</button>
    </div>
  )
}

export default App
