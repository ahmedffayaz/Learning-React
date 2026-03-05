import { useState } from 'react'
import Button from './components/Button.jsx'
import PasswordGenerator from './passwordGenerator.jsx'
import CurrencyGenerator from './currencyGenerator.jsx'
function App() {
  // useState is a React Hook that lets you add a state variable to your component. 
  // You can call it inside a function component to add some local state to it. React will preserve this state between re-renders. 
  // useState returns a pair: the current state value and a function that lets you update it.
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
    // if i repeat this function multiple times, it will not give the correct value because of the asynchronous nature of setState. To solve this problem, we can use the functional update form of setState.
    setCounter(counter => counter + 1) // In this line firslty the setcounter will be called with the current value of counter and then it will update the state with the new value. This way we can ensure that we are always working with the latest state value.
    console.log('Value Added', counter)
  }
  const removeValue = () => {
    if(counter === 0) return
    setCounter(counter - 1)
    console.log('Value Subtracted', counter)
  }
  return (
  <>
  <div className='text-center justify-center'>
  <h1 className='my-3'>Counter: {counter}</h1>
  <Button BtnText={'Add Value'} Btnevent={addValue} />
  <Button BtnText={'Subtract Value'} Btnevent={removeValue} />
  </div>
  <br />
  <PasswordGenerator />
  <CurrencyGenerator />
  </>
  )
}

export default App
