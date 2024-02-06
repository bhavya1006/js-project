import React from 'react'
import { useState } from 'react'
import Products from './Products';

function App() {
  // var [a,b] = useState(12);
  return (
    <div className='bg-zinc-900 text-white w-full h-screen p-6'>
      <Products/>
    </div>
  )
}

export default App