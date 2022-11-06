import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MenuBar from './MenuBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <MenuBar/>
      <div className='App'>Baladev making monkey site version 2.0</div>
    </div>
  )
}

export default App