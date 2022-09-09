import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen grid place-content-center">
      <h1>Hola</h1>
      <p>{count}</p>
      <button className='rounded bg-red-500 py-2 px-4 shadow-blue-600' onClick={() => {setCount(count + 1)}}>Aumenta</button>
    </div>
  )
}

export default App
