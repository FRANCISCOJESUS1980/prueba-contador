import { useState } from 'react'
import ShowCount from './components/ShowCount/ShowCount'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  return (
    <div className='app'>
      <h1>Contador de Clicks</h1>
      <ShowCount count={count} />

      <div className='buttons'>
        <button className='sumar' onClick={handleIncrement}>
          Sumar
        </button>
        <button className='restar' onClick={handleDecrement}>
          Restar
        </button>
      </div>
    </div>
  )
}

export default App
