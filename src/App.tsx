import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MenuBar from './MenuBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainpage'>
      <MenuBar/>
      <p style={{height:'3em'}}></p>
      <button style={{margin:'2em', color:'#0bb2fa'}}>Find Our Monkey Cancer!</button>
    </div>
  )
}

{
/* <p className='text large' style={{color:'#0bb2fa'}}>Eat Better Eat Monkey</p>
<p className='text large' style={{color:'#05f941'}}>Find Your Meal Plan Today!</p>
<p className='text medium otherfont' style={{color:'#32c675'}}>Specfic Meal Plans Created To Your Personal Needs</p> */}
export default App