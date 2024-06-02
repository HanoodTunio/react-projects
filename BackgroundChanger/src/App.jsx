import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
          
          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'Red', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('red')}>Red</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'seagreen', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('seagreen')}>Green</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg  '
          style={{backgroundColor: 'blue', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('blue')}>Blue</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'Yellow', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('Yellow')}>Yellow</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'pink', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('pink')}>pink</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'black', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('black')}>black</button>

          <button className='outline-none px-4 py-1 text-white text-center shadow-lg'
          style={{backgroundColor: 'green', borderRadius: '30px', padding: '10px'}}
          onClick={() => changeColor('green')}>Green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
