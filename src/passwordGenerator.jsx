import { useState, useCallback, useEffect, useRef } from 'react';
function PasswordGenerator() {
    const [length, setLength] = useState(12);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    // There is a react hook called useCallBack that lets's you cache a function definition between re-renders. 
    const generatePassword = useCallback(() => {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbersAllowed) chars += '0123456789';
        if (charAllowed) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let pass = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(randomIndex);
        }
        setPassword(pass);
    }, [length, numbersAllowed, charAllowed]);
    const copyPasswordToClipBoard = () => {
        if(passwordRef.current) {
            passwordRef.current?.select();
          window.navigator.clipboard.writeText(passwordRef.current.value)
        }   
      }
    // useEffect is a React Hook that lets you synchronize a component with an external system. 
    // It can be used to perform side effects in function components.
    // useEffect takes a function as an argument and it will run that function after the component renders.
    //  You can also specify a dependency array as the second argument to useEffect, which will tell React to only 
    // run the effect when certain values have changed.
    useEffect(() => {
        generatePassword();
    }, [length, numbersAllowed, charAllowed, generatePassword]);
  return (
    <div className="w-full max-w-md mx-auto px-4 my-8 bg-gray-700 rounded-lg shadow-md text-orange-500">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-full py-1 px-3 bg-gray-800 text-orange-500 border-none outline-none"
        />
        <button className="bg-orange-500 text-white px-4 py-1 hover:bg-orange-600" onClick={copyPasswordToClipBoard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min="4"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          /> 
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label className="text-white">Characters</label>

          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            // onChange={() => {setNumbersAllowed((prev) => !prev)}}
            onChange={() => setNumbersAllowed(!numbersAllowed)}
          />
          <label className="text-white">Numbers</label>
          
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;