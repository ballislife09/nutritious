import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './MenuBar.css'

function MenuBar() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'bar'>
        <div className = 'block'><button>Home</button></div>
        <div className = 'block'><button>Meals</button></div>
        <div className = 'block'>
            <img className = 'img' src='./public/monkey.png'></img>
        </div>
        <div className = 'block'><button>About</button></div>
        <div className = 'block'><button>Contact</button></div>
    </div>
  )
}

export default MenuBar