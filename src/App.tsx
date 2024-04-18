import { useState } from 'react'
import './App.css'
import Banner from './sections/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner hier="h1" text="Ramona's Project" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
