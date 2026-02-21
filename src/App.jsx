import { useState } from 'react'
function App() {
  let [counter, setCounter] = useState(0)
 const addValue = (counter) => {
    setCounter(counter + 1)
    console.log('Value Added', counter)
  }
  const removeValue = (counter) => {
    setCounter(counter - 1)
    console.log('Value Subtracted', counter)
  }
  return (
  <>
  <h1>Counter: {counter}</h1>
  <button
  onClick={addValue}
  >Add Value</button> <br />

  <button
  onClick={removeValue}
  >Subtract Value</button>
  </>
  )
}

export default App
