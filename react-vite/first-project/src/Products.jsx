import React, { useState } from 'react'

function Products() {
  const [val, b] = useState(false)
  return (
    <div className='text-white bg-zinc-800 w-full h-60'>
      <h2 className={`${val === false? "text-red-400":"text-blue-400"}`}>{val === false ? 'Hello':'Hey'} :)</h2>
      <button onClick={()=>b(!val)}>Change</button>
    </div>
  )
}

export default Products