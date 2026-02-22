import { useState } from 'react'
import Button from './components/Button.jsx'
function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
    console.log('Value Added', counter)
  }
  const removeValue = () => {
    if(counter === 0) return
    setCounter(counter - 1)
    console.log('Value Subtracted', counter)
  }
  return (
  <>
  <h1>Counter: {counter}</h1>
  <Button BtnText={'Add Value'} Btnevent={addValue} />
  <Button BtnText={'Subtract Value'} Btnevent={removeValue} />
  </>
  )
}

export default App
