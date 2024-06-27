import { useState, useCallback, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  // Use ref
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(passwordRef.current.value);
      setButtonClicked(true); // Set the button clicked state to true
      setTimeout(() => setButtonClicked(false), 2000); // Reset after 2 seconds
    }
  }, []);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_+\'?/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='flex items-center justify-center w-full h-screen bg-gray-900'>
        <div className='w-full max-w-md text-center mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
          Password Generator

          <div className='flex my-8 shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />

            <button 
              onClick={copyPasswordToClipboard}
              className={`outline-none px-3 py-0.5 shrink-0 ${buttonClicked ? 'bg-green-600' : 'bg-blue-800'} text-white`}>
              {buttonClicked ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>length: ({length})</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                checked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }} 
              />
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                checked={charAllowed}
                id='characterInput'
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }} 
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
